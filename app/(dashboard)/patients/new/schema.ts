import { z } from 'zod';

export const surgerySchema = z
  .object({
    surgery_date: z.date().nullable(),
    surgery_type: z.string(),
  })
  .refine(
    data => {
      if (data.surgery_date) {
        return data.surgery_type && data.surgery_type.trim() !== '';
      }
      return true;
    },
    {
      message: 'Surgery Type is required when Surgery Date is provided',
      path: ['surgery_type'],
    }
  );

export const patientSchema = z
  .object({
    first_name: z.string().min(1, 'Required'),
    middle_name: z.string().optional().nullable(),
    last_name: z.string().min(1, 'Required'),
    gender: z.enum(['male', 'female', 'diverse']),
    date_of_birth: z.date().nullable(),
    insurance_carrier: z.string().min(1, 'Required'),
    employer: z.string().min(1, 'Required'),
    job_title: z.string().min(1, 'Required'),
    referring_physician: z.string().min(1, 'Required'),
    other_physician: z.string().optional().nullable(),
    diagnosis: z.string().min(1, 'Required'),
    evaluator: z.string(),
    claims_adjustor: z.string().optional().nullable(),
    case_manager: z.string().optional().nullable(),
    attorney: z.string().optional().nullable(),
    date_of_assessment: z.date().nullable(),
    date_of_injury: z.date().nullable(),
    date_of_disability: z.date().nullable(),
    claim_number: z.string().min(1, 'Required'),
    signed_consent: z.boolean(),
    surgeries: z.array(surgerySchema),
  })
  .refine(
    data => {
      return (
        data.date_of_birth != null && data.date_of_assessment != null && data.date_of_injury != null
      );
    },
    {
      message: 'Date of Birth, Assessment, and Injury are required',
      path: ['date_of_birth'],
    }
  );
