'use client';

import { useState } from 'react';

import { TextInput } from '@mantine/core';

import { IconSearch } from '@tabler/icons-react';

import { type Column, DataTable } from '~/components/table';

import { Database } from '~/database.types';
import { formatDateToUI } from '~/utils/dates';

type Patient = Database['public']['Tables']['patients']['Row'];

const columns: Array<Column<Patient>> = [
  {
    key: 'first_name',
    header: 'Name',
    render: (_, row) => `${row.first_name} ${row.last_name}`,
  },
  {
    key: 'date_of_birth',
    header: 'Date of Birth',
    render: date => formatDateToUI(date as string) || '-',
  },
  {
    key: 'date_of_injury',
    header: 'Date of Injury',
    render: date => formatDateToUI(date as string) || '-',
  },
  {
    key: 'employer',
    header: 'Employer',
    render: value => value || '-',
  },
];

export default function PatientsTable({ patients }: { patients: Array<Patient> }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPatients = patients.filter(({ first_name, last_name }) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      first_name.toLowerCase().includes(searchTerm) ||
      last_name.toLowerCase().includes(searchTerm) ||
      `${first_name} ${last_name}`.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <>
      <TextInput
        leftSection={<IconSearch size={16} />}
        placeholder="Search patients"
        value={searchQuery}
        onChange={e => setSearchQuery(e.currentTarget.value)}
      />
      <DataTable columns={columns} rows={filteredPatients} emptyMessage="No patients found" />
    </>
  );
}
