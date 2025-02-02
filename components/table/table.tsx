'use client';

import { Table, Text } from '@mantine/core';

export interface Column<T> {
  key: keyof T;
  header: string;
  width?: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: Array<Column<T>>;
  rows: Array<T>;
  emptyMessage?: string;
}

export function DataTable<T extends { id: string }>(props: TableProps<T>) {
  const { columns, rows, emptyMessage = 'No data available' } = props;

  return (
    <Table verticalSpacing="sm">
      <Table.Thead>
        <Table.Tr>
          {columns.map(column => (
            <Table.Th
              key={String(column.key)}
              style={{ width: column.width || `${100 / columns.length}%` }}
            >
              {column.header}
            </Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {rows.length === 0 ? (
          <Table.Tr>
            <Table.Td colSpan={columns.length} height={100}>
              <Text ta="center" size="sm" c="dimmed">
                {emptyMessage}
              </Text>
            </Table.Td>
          </Table.Tr>
        ) : (
          rows.map(row => (
            <Table.Tr key={row.id}>
              {columns.map(column => (
                <Table.Td key={`${row.id}-${String(column.key)}`}>
                  {column.render
                    ? column.render(row[column.key], row)
                    : (row[column.key] as React.ReactNode)}
                </Table.Td>
              ))}
            </Table.Tr>
          ))
        )}
      </Table.Tbody>
    </Table>
  );
}
