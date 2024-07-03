"use client"

import ProjectCard from '@/components/ProjectCard'
import { ServicesDetails } from '@/constants'
import React from 'react'
import './services.css';


const Services = () => {
  return (
     
      <div id='services' 
     style={{backgroundImage: "url(/mountains.jpg)"}}
     className="flex flex-wrap justify-center items-center "> 
        <h1>Services</h1>
        <div className="flex flex-wrap justify-center items-center h-screen">
        {ServicesDetails.map((service, index) => (
          <ProjectCard
              key={index}
              title={service.title}
              text={service.text}
              image={service.src}
          />
        ))}
        </div>
      </div>
  )
}

export default Services;