import { Card, Container, Title } from '@mantine/core';

import NewPatientForm from './new-patient-form';

export default function NewPatient() {
  return (
    <Container size="lg" pt="lg">
      <Card p="lg" withBorder>
        <Title order={3} mb="lg">
          New Patient
        </Title>
        <NewPatientForm />
      </Card>
    </Container>
  );
}
