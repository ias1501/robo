import SignIn from '@/components/Auth/SignIn'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'
import createClient from 'src/lib/supabase-server';

const page = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/');
  }
  return (
    <div><SignIn/>
    
    <Link className="button" href="/profile">
          Go to Profile
        </Link>
    </div>
  )
}

export default page