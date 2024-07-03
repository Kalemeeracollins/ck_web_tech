import Link from "next/link"

export default function Component() {
  return (
    <footer className="container1 text-white bg-gray-200 ">
      <div className="container max-w-7xl pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground">
            CK Web Tech is a leading software development company that specializes in creating innovative web
            applications and digital solutions.
          </p>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <Link href="#" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Services
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Services</h4>
          <Link href="#" className="hover:underline" prefetch={false}>
            Web Development
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Mobile Development
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            UX Design
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Consulting
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Contact</h4>
          <p>
            Bugema, Kampala Uganda
            <br />
            Phone: (+256) 750-900962
            <br />
            Email: ckwebtech5@gmail.com
          </p>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 flex items-center justify-between mb-20">
        <p className="text-sm text-muted-foreground">&copy; 2024 CK Web Tech. All rights reserved.</p>
        <nav className="flex gap-4">
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  )
}