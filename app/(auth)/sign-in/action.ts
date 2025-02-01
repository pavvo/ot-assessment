'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { actionClient } from '~/lib/safe-action';
import { createClient } from '~/lib/supabase/server-client';

import { signInSchema } from './schema';

export const signIn = actionClient
  .schema(signInSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    // Create a new Supabase client
    const supabase = await createClient();

    // Try to sign in with the provided credentials
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    // If there was an error, return a failure message
    if (error) {
      return { failure: 'Incorrect credentials' };
    }

    revalidatePath('/', 'layout');
    redirect('/');
  });
