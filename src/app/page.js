'use client';

import Navbar from '@/components/Navbar';
<<<<<<< HEAD
import Herosection from '@/components/herosection';
import Hero2 from '@/components/hero2';
// import Herosection from '@/components/herosection';
=======
>>>>>>> parent of 32cba7e (test)
import HeroSection from '@/components/herosection';
import Link from 'next/link';   
import { useEffect } from 'react';

import Auth from 'src/components/Auth';
import { useAuth, VIEWS } from 'src/components/AuthProvider';
import Hero3 from '@/components/Hero3';

export default function Home() {
  const { initial, user, view, signOut } = useAuth();

  if (initial) {
    return <div className="card h-72">Loading...</div>;
  }

  if (view === VIEWS.UPDATE_PASSWORD) {
    return <Auth view={view} />;
  }
  if(!user){
    return (
<<<<<<< HEAD
      // <><Herosection />
      // </>
      <><Hero2 /></>
=======
      <><HeroSection/>
      </>
>>>>>>> parent of 32cba7e (test)
    )
  }
  
  if (user) {
    return (
      <div>
      <>
        
        <HeroSection />
              {/* <div className="card">
        <h2>Welcome!</h2>
        <code className="highlight">{user.role}</code>
        <Link className="button" href="/profile">
          Go to Profile
        </Link>
        <button type="button" className="button-inverse" onClick={signOut}>
          Sign Out
        </button>
      </div>
      </div> */}

      
      </>
      </div>
    );
  }

  return <Auth view={view} />;
}