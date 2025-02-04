import Link from 'next/link';

import { Anchor, Button, Card, Container, Group, Stack, Title } from '@mantine/core';

import { IconPlus } from '@tabler/icons-react';

import { createClient } from '~/lib/supabase/server-client';

import PatientsTable from './components/patients-table';

export default async function Patients() {
  const supabase = await createClient();

  const { data: patients } = await supabase.from('patients').select('*');

  return (
    <Container size="lg" pt="lg">
      <Card p="lg" withBorder>
        <Stack gap="lg">
          <Group justify="space-between">
            <Title order={3}>Patients</Title>
            <Anchor component={Link} href="/patients/new">
              <Button leftSection={<IconPlus size={16} />}>New Patient</Button>
            </Anchor>
          </Group>
          <PatientsTable patients={patients || []} />
        </Stack>
      </Card>
    </Container>
  );
}
