import { Avatar, Group, MenuTarget, Stack, Text, UnstyledButton } from '@mantine/core';

import { useCurrentUser } from '~/hooks/use-current-user';

import { UserInfoSkeleton } from './user-info-skeleton';

function getNameFromEmail(email?: string) {
  // If no email is provided, return an empty string
  if (!email) return '';

  // Get part before the @ symbol
  let name = email.split('@')[0];

  // Capitalize the first letter
  name = name.charAt(0).toUpperCase() + name.slice(1);

  return name;
}

export function UserInfo() {
  const { user, isLoading } = useCurrentUser();

  if (!user && isLoading) return <UserInfoSkeleton />;

  const { email } = user ?? {};

  return (
    <MenuTarget>
      <UnstyledButton>
        <Group gap={7}>
          <Stack visibleFrom="sm" align="end" ta="end" gap={2}>
            <Text size="sm" lh={1}>
              {getNameFromEmail(email)}
            </Text>
            <Text size="xs" lh={1} c="dimmed">
              {email}
            </Text>
          </Stack>
          <Avatar alt={email} />
        </Group>
      </UnstyledButton>
    </MenuTarget>
  );
}
