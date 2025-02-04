import { useEffect, useState } from 'react';

import { redirect } from 'next/navigation';

import { type User } from '@supabase/supabase-js';

import { type AccountFormData } from '~/app/(dashboard)/account/types';

import { createClient } from '~/lib/supabase/browser-client';

interface UseCurrentUserReturn {
  user: User | null;
  profile: AccountFormData | null;
  error: Error | null;
  isLoading: boolean;
  refresh: () => Promise<void>;
  signOut: () => Promise<void>;
}

const supabase = createClient();

export function useCurrentUser(): UseCurrentUserReturn {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<AccountFormData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single();

    if (error) throw error;
    setProfile(data);
  };

  const setCurrentUser = async (user: User | null) => {
    if (!user) {
      setUser(null);
      setProfile(null);
      return;
    }

    setUser(user);
    await fetchProfile(user.id);
  };

  const refresh = async () => {
    try {
      setIsLoading(true);
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) throw error;

      setCurrentUser(session?.user ?? null);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch user'));
      setCurrentUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    // Sign out from Supabase
    await supabase.auth.signOut();
    // Refresh the user data
    await refresh();
    // Redirect to the sign-in page
    redirect('/sign-in');
  };

  useEffect(() => {
    refresh();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setCurrentUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { user, profile, error, isLoading, refresh, signOut };
}
