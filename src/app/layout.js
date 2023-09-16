import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/herosection";
import { AuthProvider } from "src/components/AuthProvider";
import createClient from "src/lib/supabase-server";

import "src/styles/globals.css";

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
      <head>
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/chart.js" />
  <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
</head>
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
            <div className="flex flex-col min-h-screen">
      <Navbar className="fixed top-0 left-0 w-full z-10" /> {/* Add fixed class */}
      {/* <Navbar className="fixed top-0 left-0 w-full z-10" />  */}
      <div > {/* Adjust the top margin */}
        {children}
        </div>
      </div>
              <Footer />
            </AuthProvider>
          </main>
          
        </>
      </body>
    </html>
  );
}
