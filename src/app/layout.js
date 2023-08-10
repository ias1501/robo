
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/herosection';
import { AuthProvider } from 'src/components/AuthProvider';
import createClient from 'src/lib/supabase-server';

import 'src/styles/globals.css';

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({ children }) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;

  return (
    <html lang="en">
      <body>
      
      {/* <HeroSection /> */}
      <>
        {/* <div className="flex min-h-screen flex-col items-center justify-center py-2">
          <main className="flex w-full flex-1 shrink-0 flex-col items-center justify-center px-8 text-center sm:px-20">
            
            <h1 className="mb-12 text-5xl font-bold sm:text-6xl">
              Next.js with <span className="font-black text-green-400">Supabase</span>
            </h1>
            
          </main>
        </div> */}
        <main>
        <AuthProvider accessToken={accessToken}>
        <Navbar />{children}</AuthProvider>
        </main>
        <Footer/>
        </>
      </body>
    </html>
  );
}