import { Stack, Title } from '@mantine/core';

import { createClient } from '~/lib/supabase/server-client';

import AccountSettings from './components/account-settings';

export default async function AccountPage() {
  const supabase = await createClient();

  const user = await supabase.auth.getUser();

  // @TODO: Add proper error handling
  if (!user) throw new Error('User not found');

  const userId = user.data.user?.id;

  // @TODO: Add proper error handling
  if (!userId) throw new Error('User ID not found');

  const { data } = await supabase.from('profiles').select().eq('id', userId).single();

  console.log('Profile data: ', data);

  return (
    <Stack p="md" maw={800} mx="auto">
      <Title order={2}>Account Settings</Title>
      <AccountSettings account={data} />
    </Stack>
  );
}
