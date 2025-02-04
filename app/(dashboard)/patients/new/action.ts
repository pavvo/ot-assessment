'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { actionClient } from '~/lib/safe-action';
import { createClient } from '~/lib/supabase/server-client';

import { patientSchema } from './schema';

export const createPatient = actionClient.schema(patientSchema).action(async ({ parsedInput }) => {
  const supabase = await createClient();

  // Destructure surgeries from input
  const { surgeries, ...patientData } = parsedInput;

  // Start a Supabase transaction
  const { data: patient, error: patientError } = await supabase
    .from('patients')
    // @ts-expect-error - Fix this
    .insert(patientData)
    .select()
    .single();

  if (patientError) {
    return { failure: patientError.message };
  }

  // Filter out empty surgeries
  const validSurgeries = surgeries.filter(surgery => surgery.surgery_date || surgery.surgery_type);

  if (validSurgeries.length > 0) {
    // Add patient_id to each surgery
    const surgeryRecords = validSurgeries.map(surgery => ({
      ...surgery,
      patient_id: patient.id,
    }));

    // Insert surgeries
    // @ts-expect-error - Fix this
    const { error: surgeriesError } = await supabase.from('surgeries').insert(surgeryRecords);

    if (surgeriesError) {
      // If surgeries fail, we should probably delete the patient
      await supabase.from('patients').delete().eq('id', patient.id);
      return { failure: surgeriesError.message };
    }
  }

  revalidatePath('/patients');
  redirect('/patients');
});
