"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton
 from './TabButton'

 const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Typescript</li>
                <li>ExpressJS</li>
                <li>MySQL/PostgreSQL</li>
                <li>MongoDB/Mongoose</li>
                <li>....</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Cetta Mandarin, Dec 2023 - Present</li>
                <li>RevoU, Jun 2023 - Dec 2023</li>
                <li>SMA St. Kristoforus I, Jun 2013 - Jun 2016</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Certification of Excellence, Best Student of Chuji Shang - Cetta Mandarin</li>
                <li>Certificate of Achievements - Full Stack Software Engineering - RevoU</li>
                <li>Certificate of Stage Graduation - EF Indonesia</li>
            </ul>
        )
    }
 ]
const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id)
        })
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image 
            src="/images/about-image.jpg" 
            alt='Laptop at a Cafe' 
            width={500} 
            height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>Hello there! I'm Sherin, an Aspiring Software Engineer with a love for continuous learning. 
                    When I'm not immersed in the world of technology, you can often find me exploring 
                    the lands of pure imagination as an avid gamer or anime/manhwa enjoyer! 
                    During my journey through the RevoU FSSE program, I was able to gain some proficiency 
                    in both backend and frontend development, becoming familiar with Typescript, ExpressJS, 
                    MySQL, MongoDB, React, HTML, CSS, and so on. 
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        {" "} Skills  {" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        {" "} Education  {" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                        {" "} certifications  {" "}
                    </TabButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab)?.content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection