import { Box, Center, Text } from '@mantine/core';

export default function Assessments() {
  return (
    <Box
      style={{
        border: 1,
        borderColor: 'var(--mantine-color-gray-5)',
        borderStyle: 'dashed',
        width: '100%',
        height: '100%',
      }}
    >
      <Center h="100%">
        <Text>This is a placeholder for the assessments page.</Text>
      </Center>
    </Box>
  );
}
