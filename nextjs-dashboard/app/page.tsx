import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon, WalletIcon, ChartPieIcon, FingerPrintIcon, UsersIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    name: 'Dashboard',
    description: 'Access crucial insights directly from your desk or on the go.',
    icon: ChartPieIcon,
  },
  {
    name: 'Customer Management',
    description: 'A flexible, easy-to-use customer list at your fingertips.',
    icon: UsersIcon,
  },
  {
    name: 'Invoice Tracking',
    description: 'Simplified tracking for payments and invoice statuses.',
    icon: WalletIcon,
  },
  {
    name: 'Advanced Security',
    description: 'Top-tier security standards to keep your data safe.',
    icon: FingerPrintIcon,
  },
];

const people = [
  { name: 'Name 1', role: 'CEO, Founder' },
  { name: 'Name 2', role: 'COO, Co-Founder' },
  { name: 'Name 3', role: 'CTO' },
  { name: 'Name 4', role: 'CFO' },
  { name: 'Name 5', role: 'Head of Design' },
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gray-100">
      <header className="flex h-20 w-full items-center justify-center rounded-md bg-blue-600 p-4 md:h-28">
        <AcmeLogo />
      </header>

      <section className="mt-8 flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between md:gap-16">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900 md:text-5xl">
            Welcome to <span className="text-blue-600">CMG</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Your all-in-one solution for managing customers and invoices.
          </p>
          <Link
            href="/login"
            className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-500"
          >
            <span>Log in</span> <ArrowRightIcon className="ml-2 w-5 h-5" />
          </Link>
        </div>
        <div className="w-full md:w-2/3">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard projecr showing mobile version"
          />
        </div>
      </section>

      <section className="bg-white rounded-lg py-24 mt-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-900">
            Everything You Need for Customer & Invoice Management
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Built to streamline and elevate your business.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex items-start p-6 bg-gray-50 rounded-lg shadow-sm">
                <feature.icon className="h-10 w-10 text-blue-600" />
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <br/>

      <section className="bg-gray-50 rounded-lg py-24">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold text-gray-900">Meet Our Leadership</h2>
          <p className="mt-4 text-lg text-gray-600">
            A passionate, dedicated team committed to driving results.
          </p>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {people.map((person) => (
              <div key={person.name} className="flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
                <p className="text-indigo-600">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <br/>

      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <section className="py-24 text-center text-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-semibold">Boost Your Productivity Today</h2>
              <p className="mt-4 text-lg text-gray-300">
                Discover the ultimate tool to simplify and optimize your workflow.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/login"
                  className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-500"
                >
                  <span>Log in</span> <ArrowRightIcon className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

    </main>
  );
}
