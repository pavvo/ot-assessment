'use client';

import { notifications } from '@mantine/notifications';

import { useEffect } from 'react';

import { z } from 'zod';

import { useAction } from 'next-safe-action/hooks';

import { Button, Group, Stack, Text, TextInput } from '@mantine/core';

import { useForm, zodResolver } from '@mantine/form';

import { updatePassword } from '../actions/update-password';
import { passwordSchema } from '../schema';

type PasswordFormData = z.infer<typeof passwordSchema>;

export function PasswordUpdate() {
  const { execute, isPending, result, reset } = useAction(updatePassword);

  const form = useForm<PasswordFormData>({
    validate: zodResolver(passwordSchema),
    initialValues: {
      current_password: '',
      new_password: '',
      confirm_password: '',
    },
  });

  const handleSubmit = (values: PasswordFormData) => {
    reset();
    execute(values);
  };

  useEffect(() => {
    if (result?.data?.success) {
      notifications.show({
        title: 'Password updated',
        message: 'Your password has been updated successfully',
        color: 'teal',
      });

      // Reset action state
      reset();

      // Reset form
      form.reset();
    }

    if (result?.data?.failure) {
      notifications.show({
        title: 'Password update failed',
        message: 'An error occurred while updating your password',
        color: 'red',
      });
    }
  }, [result]);

  return (
    <>
      <Text fw={500} size="sm" mb="md">
        Change Password
      </Text>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="sm">
          <TextInput
            type="password"
            label="Current Password"
            placeholder="Enter current password"
            {...form.getInputProps('current_password')}
          />
          <Group grow>
            <TextInput
              type="password"
              label="New Password"
              placeholder="Enter new password"
              {...form.getInputProps('new_password')}
            />
            <TextInput
              type="password"
              label="Confirm Password"
              placeholder="Confirm new password"
              {...form.getInputProps('confirm_password')}
            />
          </Group>
          <Group justify="flex-end">
            <Button type="submit" loading={isPending}>
              Update Password
            </Button>
          </Group>
        </Stack>
      </form>
    </>
  );
}
