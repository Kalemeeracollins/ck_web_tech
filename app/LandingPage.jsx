import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import VideoPlayer from "@/components/videoPlayer"
import  { Card, CardContent } from "@/components/ui/card"
export default function LandingPage() {
  return (
    <div className=" mt-4 flex flex-col items-center justify-center pt-24 w-full min-h-screen bg-gray-100">
      <div className="flex flex-col items-start justify-between w-full max-w-6xl p-8 bg-white rounded-lg shadow-lg md:flex-row">
        <div className="flex flex-col items-start justify-center w-full md:w-1/2">
          <div className="flex items-center justify-center w-16 h-16 mb-4 bg-yellow-500">
            <span className="text-sm font-bold text-black">CK_WEB_TECH</span>
          </div>
          <h1 className="text-5xl font-bold text-black">Website</h1>
          <h1 className="text-5xl font-bold text-black">Development</h1>
          <p className="mt-4 text-lg text-gray-600">
            The most talented minds work hand in hand with you to produce your unique and high-performing website.
          </p>
          <div className="flex mt-6 space-x-4">
            <Button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center">
              <MessageCircleIcon className="mr-2" />
              WORK WITH US
            </Button>
            <Button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg flex items-center">
              <PhoneIcon className="mr-2" />
              CALL US : +256 750900962
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-8 md:mt-0 md:w-1/2">
          <VideoPlayer />
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <Button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center">
          <MessageCircleIcon className="mr-2" />
          We are Online! How may I help you today?
        </Button>
      </div>
      <div className="bg-white text-gray-800 mt-8">
      <header className="text-center p-6 bg-gray-200">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mt-4">Why suffer with low-quality websites?</h1>
          <p className="text-lg mt-2">
            Your website is an extension of your brand. That means it should be a powerful marketing tool to work with your marketing strategies.
            We work with companies from various industries to develop websites using the best CMS solutions and stunning designs.
          </p>
        </div>
      </header>

      <section className="text-center p-6">
        <h2 className="text-2xl font-bold mb-4">Our Recent Projects</h2>
        <div className="flex justify-center space-x-4">
          <div className="w-1/3">
          <Link href="https://troniq.boogiecoin.com/">
            <Image
              src="/project1.jpg" // Update the path to your project images
              alt="Project 1"
              width={600}
              height={400}
            />
          </Link>
          </div>
          <div className="w-1/3">
          <Link href="https://troniq.boogiecoin.com/">
            <Image
              src="/project.jpeg" // Update the path to your project images
              alt="Project 2"
              width={500}
              height={300}
            />
            </Link>
          </div>
          <div className="w-1/3">
          <Link href="https://troniq.boogiecoin.com/">
            <Image
              src="/project3.png" // Update the path to your project images
              alt="Project 3"
              width={500}
              height={300}
            />
            </Link>
          </div>
        </div>
        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">See More</button>
      </section>
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      <Card className="h-[300px] shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
          <PencilIcon className="w-10 h-10 text-primary" />
          <h3 className="text-xl font-semibold">1. Ideation</h3>
          <p className="text-muted-foreground text-center">
            Brainstorming and generating ideas for the software solution.
          </p>
        </CardContent>
      </Card>
      <Card className="h-[300px] shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
          <LayoutTemplateIcon className="w-10 h-10 text-primary" />
          <h3 className="text-xl font-semibold">2. Design</h3>
          <p className="text-muted-foreground text-center">
            Crafting the user interface and experience of the software.
          </p>
        </CardContent>
      </Card>
      <Card className="h-[300px] shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
          <CodeIcon className="w-10 h-10 text-primary" />
          <h3 className="text-xl font-semibold">3. Development</h3>
          <p className="text-muted-foreground text-center">
            Implementing the software solution using code and technology.
          </p>
        </CardContent>
      </Card>
      <Card className="h-[300px] shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
          <RocketIcon className="w-10 h-10 text-primary" />
          <h3 className="text-xl font-semibold">4. Deployment</h3>
          <p className="text-muted-foreground text-center">Releasing the software to users and making it available.</p>
        </CardContent>
      </Card>
      <Card className="h-[300px] shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
          <GaugeIcon className="w-10 h-10 text-primary" />
          <h3 className="text-xl font-semibold">5. Monitoring</h3>
          <p className="text-muted-foreground text-center">Tracking the performance and usage of the software.</p>
        </CardContent>
      </Card>
      <Card className="h-[300px] shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
          <RefreshCwIcon className="w-10 h-10 text-primary" />
          <h3 className="text-xl font-semibold">6. Iteration</h3>
          <p className="text-muted-foreground text-center">
            Continuously improving the software based on user feedback.
          </p>
        </CardContent>
      </Card>
      <Card className="h-[300px] shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
          <WrenchIcon className="w-10 h-10 text-primary" />
          <h3 className="text-xl font-semibold">7. Maintenance</h3>
          <p className="text-muted-foreground text-center">Ensuring the software remains functional and up-to-date.</p>
        </CardContent>
      </Card>
      <Card className="h-[300px] shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
          <ReplyIcon className="w-10 h-10 text-primary" />
          <h3 className="text-xl font-semibold">8. Feedback</h3>
          <p className="text-muted-foreground text-center">
            Collecting and incorporating user feedback to improve the software.
          </p>
        </CardContent>
      </Card>
    </section>
    </div>
    </div>
  )
}

function MessageCircleIcon(props) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}function CodeIcon(props) {
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
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }
  
  
  function GaugeIcon(props) {
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
        <path d="m12 14 4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </svg>
    )
  }
  
  
  function LayoutTemplateIcon(props) {
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
        <rect width="18" height="7" x="3" y="3" rx="1" />
        <rect width="9" height="7" x="3" y="14" rx="1" />
        <rect width="5" height="7" x="16" y="14" rx="1" />
      </svg>
    )
  }
  
  
  function PencilIcon(props) {
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
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    )
  }
  
  
  function RefreshCwIcon(props) {
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
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M8 16H3v5" />
      </svg>
    )
  }
  
  
  function ReplyIcon(props) {
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
        <polyline points="9 17 4 12 9 7" />
        <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
      </svg>
    )
  }
  
  
  function RocketIcon(props) {
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
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    )
  }
  
  
  function WrenchIcon(props) {
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
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  }