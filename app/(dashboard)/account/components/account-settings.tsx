'use client';

import { notifications } from '@mantine/notifications';

import { useEffect } from 'react';

import { useAction } from 'next-safe-action/hooks';

import {
  Button,
  Group,
  Paper,
  Select,
  Stack,
  Tabs,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core';

import { useForm, zodResolver } from '@mantine/form';

import { IconLock, IconUserCircle } from '@tabler/icons-react';

import { useCurrentUser } from '~/hooks/use-current-user';

import { Database } from '~/database.types';

import { updateAccount } from '../actions/update-account';
import { STATE_OPTIONS } from '../constants';
import { accountSchema } from '../schema';
import { type AccountFormData } from '../types';
import { PasswordUpdate } from './password-update';

interface AccountSettingsProps {
  account: Database['public']['Tables']['profiles']['Row'] | null;
}

export default function AccountSettings({ account }: AccountSettingsProps) {
  const { user } = useCurrentUser();

  const { execute, isPending, reset, status } = useAction(updateAccount);

  const form = useForm<AccountFormData>({
    validate: zodResolver(accountSchema),
    initialValues: {
      first_name: account?.first_name || '',
      last_name: account?.last_name || '',
      signature_details: account?.signature_details || '',
      username: account?.username || user?.email || '',
      npi: account?.npi || '',
      organization: account?.organization || '',
      work_phone: account?.work_phone || '',
      fax: account?.fax || '',
      address_line1: account?.address_line1 || '',
      address_line2: account?.address_line2 || '',
      city: account?.city || '',
      state: account?.state || undefined,
      zip: account?.zip || '',
    },
  });

  const handleSubmit = (values: AccountFormData) => {
    reset();
    execute(values);
  };

  useEffect(() => {
    if (status === 'hasSucceeded') {
      // Show success notification
      notifications.show({
        title: 'Account updated',
        message: 'Your account has been updated successfully',
        color: 'teal',
      });
    }

    if (status === 'hasErrored') {
      // Show error notification
      notifications.show({
        title: 'Account update failed',
        message: 'An error occurred while updating your account',
        color: 'red',
      });
    }
  }, [status]);

  return (
    <Paper withBorder>
      <Tabs defaultValue="account">
        <Tabs.List>
          <Tabs.Tab value="account" leftSection={<IconUserCircle size={16} />}>
            Account Information
          </Tabs.Tab>
          <Tabs.Tab value="security" leftSection={<IconLock size={16} />}>
            Security
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="account" p="md">
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="lg">
              <div>
                <Text fw={500} size="sm" mb="md">
                  Personal Information
                </Text>
                <Stack gap="sm">
                  <Group grow>
                    <TextInput
                      label="First Name"
                      placeholder="Enter your first name"
                      {...form.getInputProps('first_name')}
                    />
                    <TextInput
                      label="Last Name"
                      placeholder="Enter your last name"
                      {...form.getInputProps('last_name')}
                    />
                  </Group>
                  <Textarea
                    label="Signature Details"
                    placeholder="Enter signature details"
                    {...form.getInputProps('signature_details')}
                  />
                  <Group grow>
                    <TextInput
                      label="Username"
                      placeholder="Enter username"
                      {...form.getInputProps('username')}
                    />
                    <TextInput label="NPI" placeholder="Enter NPI" {...form.getInputProps('npi')} />
                  </Group>
                </Stack>
              </div>

              <div>
                <Text fw={500} size="sm" mb="md">
                  Organization Details
                </Text>
                <Stack gap="sm">
                  <TextInput
                    label="Organization"
                    placeholder="Enter organization name"
                    {...form.getInputProps('organization')}
                  />
                  <Group grow>
                    <TextInput
                      label="Work Phone"
                      placeholder="Enter work phone"
                      {...form.getInputProps('work_phone')}
                    />
                    <TextInput
                      label="Fax"
                      placeholder="Enter fax number"
                      {...form.getInputProps('fax')}
                    />
                  </Group>
                </Stack>
              </div>

              <div>
                <Text fw={500} size="sm" mb="md">
                  Address Information
                </Text>
                <Stack gap="sm">
                  <TextInput
                    label="Address Line 1"
                    placeholder="Enter street address"
                    {...form.getInputProps('address_line1')}
                  />
                  <TextInput
                    label="Address Line 2"
                    placeholder="Enter apartment, suite, etc."
                    {...form.getInputProps('address_line2')}
                  />
                  <Group grow>
                    <TextInput
                      label="City"
                      placeholder="Enter city"
                      {...form.getInputProps('city')}
                    />
                    <Select
                      label="State"
                      placeholder="Select state"
                      data={STATE_OPTIONS}
                      {...form.getInputProps('state')}
                    />
                    <TextInput
                      label="ZIP"
                      placeholder="Enter ZIP code"
                      {...form.getInputProps('zip')}
                    />
                  </Group>
                </Stack>
              </div>

              <Group justify="flex-end">
                <Button type="submit" loading={isPending}>
                  Save Changes
                </Button>
              </Group>
            </Stack>
          </form>
        </Tabs.Panel>

        <Tabs.Panel value="security" p="md">
          <PasswordUpdate />
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
}
