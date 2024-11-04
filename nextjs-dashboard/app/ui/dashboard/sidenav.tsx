import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col bg-gray-900 p-4 text-white shadow-lg">
      <Link
        className="mb-6 flex items-center justify-start"
        href="/"
      >
        <div className="flex h-20 w-full items-center justify-center rounded-md bg-blue-600 p-4 md:h-28">
          <AcmeLogo />
        </div>
      </Link>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />

        <div className="flex-grow rounded-lg bg-gray-800 p-4 hidden md:block"></div>
        
        <form action={async() => {
          'use server';
          await signOut();
        }}>
          <button className="flex w-full items-center justify-center gap-2 rounded-md bg-gray-700 p-3 text-sm font-semibold text-gray-300 hover:bg-gray-600 hover:text-white md:justify-start md:py-2 md:px-4">
            <PowerIcon className="h-6 w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
