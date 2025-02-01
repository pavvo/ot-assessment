'use client';

import { z } from 'zod';

import { useAction } from 'next-safe-action/hooks';

import { Alert, Button, Center, Stack, Text, TextInput, Title } from '@mantine/core';

import { useForm, zodResolver } from '@mantine/form';

import { signIn } from './action';
import { signInSchema } from './schema';

type SignInPayload = z.infer<typeof signInSchema>;

export default function SignInPage() {
  const { execute, isPending, result, reset } = useAction(signIn);

  const form = useForm<SignInPayload>({
    mode: 'uncontrolled',
    validate: zodResolver(signInSchema),
  });

  const handleSignIn = (values: SignInPayload) => {
    // Reset the form and clear the previous result
    reset();
    // Execute the sign-in action
    execute(values);
  };

  return (
    <Center h="100%">
      <Stack maw="100%" w={350}>
        <Alert hidden={!result?.data?.failure} mt="md" color="red" title="Incorrect credentials">
          The email or password you entered is incorrect. Please try again.
        </Alert>
        <Title order={2}>Sign in</Title>
        <Text c="dimmed">Welcome back! Sign in to your account to continue.</Text>
        <form onSubmit={form.onSubmit(values => handleSignIn(values))}>
          <Stack gap="md">
            <TextInput
              label="Email"
              name="email"
              placeholder="Your email"
              key={form.key('email')}
              {...form.getInputProps('email')}
            />
            <TextInput
              label="Password"
              name="password"
              type="password"
              placeholder="Your password"
              key={form.key('password')}
              {...form.getInputProps('password')}
            />
            <Button mt="md" type="submit" loading={isPending}>
              Sign in
            </Button>
          </Stack>
        </form>
      </Stack>
    </Center>
  );
}
