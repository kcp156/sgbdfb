'use client';

import { useSupabase } from '@/app/supabase-provider';
import { useRouter } from 'next/navigation';


import { DropdownMenuItem } from './ui/dropdown-menu';
import { ExitIcon } from '@radix-ui/react-icons';

export default function SignOutButton() {
  const router = useRouter();
  const { supabase } = useSupabase();
  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }
  return (
    <DropdownMenuItem 
      onClick={handleSignOut}
    >
      <ExitIcon className="mr-2 h-4 w-4" />
      <span>Log out</span>
    </DropdownMenuItem>
  );
}
