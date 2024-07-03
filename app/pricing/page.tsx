// pages/pricing.js
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import  { Card, CardContent } from "@/components/ui/card"
export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - CK Web Tech</title>
        <meta name="description" content="Pricing page for CK Web Tech software solutions." />
      </Head>
      <div className="flex flex-col mt-8 min-h-screen">
        <main className="flex-grow">
          <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-center mb-6">Our Pricing Plans</h1>
              <h2 className="font-sans font-semibold text-center leading-relaxed text-gray-800 my-6 max-w-3xl mx-auto">
                At Maniflex, our prices are affordable and best-fit our clients’ requirements.
                You can Call Us to talk about your website goal and requirements, and we’ll set together
                a package that meets your needs.
              </h2>
              <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
                {/* Basic Plan */}
                <Card className="shadow-md bg-white hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <h2 className="text-2xl font-semibold ">PROFESSIONAL</h2>
                  <p className="text-3xl font-bold ">$199</p>
                  <ul className="text-gray-700 ">
                  <li className="mb-2">1Year Free Website Hosting</li>
                  <li className="mb-2">1Year Free Website Hosting</li>
                    <li className="mb-2">1-8 Web Pages</li>
                    <li className="mb-2">Attractive & World-Class Design</li>
                    <li className="mb-2">Responsive on Mobile and Tablet</li>
                    <li className="mb-2">Social Media Integration</li>
                  </ul>
                  <a href="#" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">CONTACT US</a>
                  </CardContent>
                </Card>
                {/* CORPORATE */}
                <Card className="shadow-md bg-white hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <h2 className="text-2xl font-semibold ">CORPORATE</h2>
                  <p className="text-3xl font-bold ">$399</p>
                  <ul className="text-gray-700 mb-2">
                  <li className="mb-2">1Year Free Website Hosting</li>
                    <li className="mb-2">1Year Free Domain Name</li>
                    <li className="mb-2">1-15 Web Pages & 25 Products</li>
                    <li className="mb-2">Suitable for E-Commerce</li>
                    <li className="mb-2">Attractive & World-Class Design</li>
                    <li className="mb-2">Responsive on Mobile and Tablet</li>
                  </ul>
                  <a href="#" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">CONTACT US</a>
                </CardContent>
                </Card>
                {/* Enterprise Plan */}
                <Card className="shadow-md bg-white hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <h2 className="text-2xl font-semibold ">Enterprise</h2>
                  <p className="text-3xl font-bold ">$899</p>
                  <ul className="text-gray-700 mb-2">
                    <li className="mb-2">1Year Free Website Hosting</li>
                    <li className="mb-2">1Year Free Domain Name</li>
                    <li className="mb-2">Custom & Tailor-made Design</li>
                    <li className="mb-2">Unlimited Features & Functions</li>
                    <li className="mb-2">Unlimited Web Pages</li>
                    <li className="mb-2">Unlimited Design Revisions</li>
                    <li className="mb-2">Full Analytics</li>
                  </ul>
                  <a href="#" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">CONTACT US</a>
                </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className=" py-16 ">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <Image
          src="/offers.webp"
          width={800}
          height={600}
          alt="Offer Image"
          className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Offers Include
            </h2>
          </div>
          <ul className="grid gap-2">
            <li className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-primary p-1">
                <CheckIcon className="h-5 w-5 text-green" />
              </div>
              <div>
              <h3 className="text-lg font-semibold">Website Design and Development</h3>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-primary p-1">
                <CheckIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Free Website Hosting</h3>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-primary p-1">
                <CheckIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
              <h3 className="text-lg font-semibold">Domain Name - 1 YEAR</h3>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-primary p-1">
                <CheckIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
              <h3 className="text-lg font-semibold">Web Hosting - 1 YEAR</h3>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-primary p-1">
                <CheckIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
              <h3 className="text-lg font-semibold">20+ Custom Business Emails</h3>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-primary p-1">
                <CheckIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
              <h3 className="text-lg font-semibold">Professional Logo Design</h3>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-primary p-1">
                <CheckIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
              <h3 className="text-lg font-semibold">Google Maps & Social Media Pages</h3>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-primary p-1">
                <CheckIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
              <h3 className="text-lg font-semibold">Basic Search Engine Optimization</h3>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-primary p-1">
                <CheckIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
              <h3 className="text-lg font-semibold">Mobile Responsive Design</h3>
              </div>
            </li>
          </ul>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Explore Offers
          </Link>
        </div>
      </div>
    </section>
        </main>
      </div>
    </>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}