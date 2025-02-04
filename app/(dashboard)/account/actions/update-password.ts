'use server';

import { actionClient } from '~/lib/safe-action';
import { createClient } from '~/lib/supabase/server-client';

import { passwordSchema } from '../schema';

export const updatePassword = actionClient
  .schema(passwordSchema)
  .action(async ({ parsedInput: { current_password, new_password } }) => {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return { failure: 'Not authenticated' };

    const { data, error } = await supabase.rpc('change_user_password', {
      current_plain_password: current_password,
      new_plain_password: new_password,
    });

    if (error || !data) return { failure: error?.message || 'Failed to update password' };

    return { success: true };
  });
