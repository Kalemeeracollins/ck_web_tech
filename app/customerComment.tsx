"use client"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Give us your feedback</h1>
        <p className="text-muted-foreground">
          We value your opinion and want to hear about your experience with our services. Please take a moment to share
          your feedback.
        </p>
      </div>
      <form className="bg-card p-6 md:p-8 rounded-md shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="rating">Rating</Label>
          <div className="flex items-center gap-2">
            <StarIcon className="w-6 h-6 fill-primary" />
            <StarIcon className="w-6 h-6 fill-primary" />
            <StarIcon className="w-6 h-6 fill-primary" />
            <StarIcon className="w-6 h-6 fill-muted stroke-muted-foreground" />
            <StarIcon className="w-6 h-6 fill-muted stroke-muted-foreground" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="comment">Comment</Label>
          <Textarea
            id="comment"
            placeholder="Share your thoughts"
            className="min-h-[120px] shadow-md hover:shadow-lg transition-shadow"
          />
        </div>
        <Button type="submit" className="w-full">
          Submit Feedback
        </Button>
      </form>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Recent Feedback</h2>
        <div className="space-y-6">
          <div className="bg-card p-4 md:p-6 rounded-md shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">John Doe</h3>
                  <time className="text-sm text-muted-foreground">2 days ago</time>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
            <p className="text-muted-foreground">
              The service was excellent, and the team was very responsive to my needs. I would definitely recommend this
              company to others.
            </p>
          </div>
          <div className="bg-card p-4 md:p-6 rounded-md shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Sarah Anderson</h3>
                  <time className="text-sm text-muted-foreground">1 week ago</time>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
            <p className="text-muted-foreground">
              I was very impressed with the quality of the services provided. The team was knowledgeable and went above
              and beyond to ensure my satisfaction.
            </p>
          </div>
          <div className="bg-card p-4 md:p-6 rounded-md shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Michael Johnson</h3>
                  <time className="text-sm text-muted-foreground">3 weeks ago</time>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
            <p className="text-muted-foreground">
              The services were average, and I had a few issues with the timeliness of the responses. I would recommend
              some improvements to the customer service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}