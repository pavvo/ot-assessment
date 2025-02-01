import { Menu, MenuDropdown, MenuItem, MenuLabel } from '@mantine/core';

import { IconLogout } from '@tabler/icons-react';

import { useCurrentUser } from '~/hooks/use-current-user';

import { ThemeSelect } from './theme-select';
import { UserInfo } from './user-info';

export function UserMenu() {
  const { signOut } = useCurrentUser();

  return (
    <>
      <Menu
        width={150}
        position="bottom"
        transitionProps={{ transition: 'pop-top-right' }}
        withinPortal
      >
        <UserInfo />
        <MenuDropdown>
          <ThemeSelect />
          <MenuLabel>Account</MenuLabel>
          <MenuItem onClick={signOut} leftSection={<IconLogout width={16} />}>
            Sign out
          </MenuItem>
        </MenuDropdown>
      </Menu>
    </>
  );
}
