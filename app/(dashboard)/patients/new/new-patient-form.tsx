'use client';

import { DateInput } from '@mantine/dates';

import type { z } from 'zod';

import { useAction } from 'next-safe-action/hooks';

import { Button, Checkbox, Grid, Group, Select, Stack, Text, TextInput } from '@mantine/core';

import { useForm, zodResolver } from '@mantine/form';

import { IconPlus, IconTrash } from '@tabler/icons-react';

import { createPatient } from './action';
import { patientSchema } from './schema';

type PatientPayload = z.infer<typeof patientSchema>;

export default function NewPatientPage() {
  const { execute, reset } = useAction(createPatient);

  const form = useForm<PatientPayload>({
    validate: zodResolver(patientSchema),
    initialValues: {
      first_name: '',
      middle_name: '',
      last_name: '',
      gender: 'male',
      date_of_birth: null,
      insurance_carrier: '',
      employer: '',
      job_title: '',
      referring_physician: '',
      other_physician: '',
      diagnosis: '',
      evaluator: '',
      claims_adjustor: '',
      case_manager: '',
      attorney: '',
      date_of_assessment: new Date(),
      date_of_injury: null,
      date_of_disability: null,
      claim_number: '',
      signed_consent: false,
      surgeries: [{ surgery_date: null, surgery_type: '' }],
    },
  });

  const handleSubmit = (values: PatientPayload) => {
    reset();
    execute(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="lg">
        {/* Personal Information */}
        <Stack gap="md">
          <Text c="dimmed" fw={500} size="md">
            Personal Information
          </Text>
          <Grid>
            <Grid.Col span={{ base: 12, sm: 4 }}>
              <TextInput label="First Name" {...form.getInputProps('first_name')} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 4 }}>
              <TextInput label="Middle Name" {...form.getInputProps('middle_name')} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 4 }}>
              <TextInput label="Last Name" {...form.getInputProps('last_name')} />
            </Grid.Col>
          </Grid>

          <Grid>
            <Grid.Col span={{ base: 12, sm: 4 }}>
              <Select
                label="Gender"
                data={['male', 'female', 'diverse']}
                {...form.getInputProps('gender')}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 4 }}>
              <DateInput label="Date of Birth" {...form.getInputProps('date_of_birth')} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 4 }}>
              <TextInput label="Insurance Carrier" {...form.getInputProps('insurance_carrier')} />
            </Grid.Col>
          </Grid>
        </Stack>

        {/* Employment Information */}
        <Stack gap="md">
          <Text c="dimmed" fw={500} size="md">
            Employment Information
          </Text>
          <Grid>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput label="Employer" {...form.getInputProps('employer')} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput label="Job Title" {...form.getInputProps('job_title')} />
            </Grid.Col>
          </Grid>
        </Stack>

        {/* Medical Information */}
        <Stack gap="md">
          <Text c="dimmed" fw={500} size="md">
            Medical Information
          </Text>
          <Grid>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                label="Referring Physician"
                {...form.getInputProps('referring_physician')}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput label="Other Physician" {...form.getInputProps('other_physician')} />
            </Grid.Col>
          </Grid>

          <TextInput label="Diagnosis" {...form.getInputProps('diagnosis')} />

          {form.values.surgeries.map((_, index) => (
            <Grid key={index}>
              <Grid.Col span={{ base: 12, sm: 5 }}>
                <DateInput
                  label="Surgery Date"
                  {...form.getInputProps(`surgeries.${index}.surgery_date`)}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  label="Surgery Type"
                  {...form.getInputProps(`surgeries.${index}.surgery_type`)}
                />
              </Grid.Col>
              <Grid.Col
                span={{ base: 12, sm: 1 }}
                style={{ display: 'flex', alignItems: 'flex-end' }}
              >
                {index === form.values.surgeries.length - 1 ? (
                  <Button
                    fullWidth
                    onClick={() =>
                      form.insertListItem('surgeries', { surgery_date: null, surgery_type: '' })
                    }
                  >
                    <IconPlus size={16} />
                  </Button>
                ) : (
                  <Button
                    fullWidth
                    color="red"
                    onClick={() => form.removeListItem('surgeries', index)}
                  >
                    <IconTrash size={16} />
                  </Button>
                )}
              </Grid.Col>
            </Grid>
          ))}
        </Stack>

        {/* Case Information */}
        <Stack gap="md">
          <Text c="dimmed" fw={500} size="md">
            Case Information
          </Text>
          <Grid>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput label="Claim Number" {...form.getInputProps('claim_number')} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput label="Claims Adjustor" {...form.getInputProps('claims_adjustor')} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput label="Case Manager" {...form.getInputProps('case_manager')} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput label="Attorney" {...form.getInputProps('attorney')} />
            </Grid.Col>
          </Grid>

          <Grid>
            <Grid.Col span={{ base: 12, sm: 4 }}>
              <DateInput label="Date of Assessment" {...form.getInputProps('date_of_assessment')} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 4 }}>
              <DateInput label="Date of Injury" {...form.getInputProps('date_of_injury')} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 4 }}>
              <DateInput label="Date of Disability" {...form.getInputProps('date_of_disability')} />
            </Grid.Col>
          </Grid>

          <Grid justify="center">
            <Grid.Col>
              <Checkbox
                label="Signed Consent Form"
                {...form.getInputProps('signed_consent', { type: 'checkbox' })}
              />
            </Grid.Col>
          </Grid>
        </Stack>

        <Button type="submit">Create Patient</Button>
      </Stack>
    </form>
  );
}
