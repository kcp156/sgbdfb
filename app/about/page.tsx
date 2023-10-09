import { redirect } from "next/navigation";
import { getSession, getUserDetails, getSubscription } from "../supabase-server";


export default async function Page() {
  const [session, userDetails, subscription] = await Promise.all([
    getSession(),
    getUserDetails(),
    getSubscription()
  ]);

  const user = session?.user;

  if (!session) {
    return redirect('/signin');
  }
  return (
    <div className="container relative h-4 px-6 ">
    <h1>About Page!</h1>
    </div>
  )
}
