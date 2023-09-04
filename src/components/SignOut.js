'use client';

import { useAuth } from './AuthProvider';

export default function SignOut() {
  const { signOut } = useAuth();

  async function handleSignOut() {
    const { error } = await signOut();

    if (error) {
      console.error('ERROR signing out:', error);
    }
  }

  return (
    <button
  type="button"
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
  onClick={handleSignOut}
>
  Sign Out
</button>

  );
}