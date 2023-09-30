import SignOut from '../../../src/components/SignOut';
import createClient from 'src/lib/supabase-server';
import Link from 'next/link';
// import NavBar from '@/components/components/Navbar';
export default async function Profile() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

 

  return (
    <div className='bg-dashboard bg-cover text-white'>
      {/* <NavBar/> */}
   
      <div className="min-h-screen flex items-center justify-center">
        <div className="p-8 rounded-lg shadow-lg text-center max-w-xl mx-auto w-full" style={{background: 'linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))',

}}>
          <div className="mb-4">
            
            <h1 className="text-2xl font-semibold">Your Profile</h1>
          </div>
          <div className="mt-6">
          <strong>Email:</strong>
            <div className="border p-2 rounded-md mb-2 w-34">
              <p className="text-gray-200">{user.email}</p>
            </div>
            <strong>Last Signed In:</strong>
            <div className="border p-2 rounded-md mb-2 w-33">
              <p className="text-gray-200">{new Date().toLocaleString()}</p>
            </div>
          </div>
      <div className="mt-6 flex justify-between">
      <Link href="\"><button className="bg-blue-500 text-white py-2 px-4 rounded-3xl hover:bg-blue-600">Go Home</button>
      </Link>{/* <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"></button> */}
            <SignOut />
          </div>
    </div>
  </div>
  </div>
    // <div classNameName="card">
    //   <h2>User Profile</h2>
    //   <code classNameName="highlight">email</code>
    //   <div classNameName="heading">Last Signed In:</div>
    //   <code classNameName="highlight">{new Date().toUTCString()}</code>
    //   <Link classNameName="button" href="/">
    //     Go Home
    //   </Link>
    //   <SignOut />
    // </div>
  );
}