import { Button } from '@/components/ui/button';
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container relative h-4 px-6 ">
      <h1 className='text-2xl font-medium text-red-600'>Not Found</h1>
      <p>Could not find requested resource</p>
      <br />
      <Link href="/">
        <Button size="default" variant="outline">Return Home</Button>
        </Link>
    </div>
  );
}
