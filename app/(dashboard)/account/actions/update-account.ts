'use server';

import { revalidatePath } from 'next/cache';

import { actionClient } from '~/lib/safe-action';
import { createClient } from '~/lib/supabase/server-client';

import { accountSchema } from '../schema';

export const updateAccount = actionClient.schema(accountSchema).action(async ({ parsedInput }) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { failure: 'Not authenticated' };

  const { error } = await supabase
    .from('profiles')
    .update({ state: parsedInput.state, ...parsedInput })
    .eq('id', user.id);

  if (error) return { failure: error.message };

  revalidatePath('/account');
});
