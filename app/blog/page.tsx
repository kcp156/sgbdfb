
import {
  getSession,
  getSubscription,
  getUserDetails
} from '../supabase-server';

import React from 'react';



export default async function BlogPage() {
  const [session, userDetails, subscription] = await Promise.all([
    getSession(),
    getUserDetails(),
    getSubscription()
  ]);

  const user = session?.user;

//   if (!session) {
//     return redirect('/signin');
//   }
  return (
    <section className="mb-32 ">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-center text-4xl font-bold ">
            Blog Page
          </h1>
          <p className="m-auto mt-5 max-w-2xl text-xl  sm:text-center sm:text-2xl">
            {userDetails?.full_name}
          </p>
          <p className="m-auto mt-5 max-w-2xl text-xl  sm:text-center sm:text-2xl">
            { user?.email}
          </p>
          <p className="m-auto mt-5 max-w-2xl text-xl  sm:text-center sm:text-2xl">
            {userDetails?.avatar_url}
          </p>

<hr className=' my-3' />
<div className="flex items-center gap-4">


</div>
        </div>
      </div>
    </section>
  );
}
