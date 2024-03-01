"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "Dummy P.1",
        description: "Dummy P.1 Description",
        image: "/images/projects/IMG1.jpg",
        tag: ["All","Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Dummy P.2",
        description: "Dummy P.2 Description",
        image: "/images/projects/IMG2.jpg",
        tag: ["All","Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Dummy P.3",
        description: "Dummy P.3 Description",
        image: "/images/projects/IMG3.jpg",
        tag: ["All",],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Dummy P.4",
        description: "Dummy P.4 Description",
        image: "/images/projects/IMG4.jpg",
        tag: ["All"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Dummy P.5",
        description: "Dummy P.5 Description",
        image: "/images/projects/IMG5.jpg",
        tag: ["All","Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Dummy P.6",
        description: "Dummy P.6 Description",
        image: "/images/projects/IMG6.jpg",
        tag: ["All","Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

  return (
    <>
        <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Web" 
                isSelected={tag === "Web"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Mobile" 
                isSelected={tag === "Mobile"} 
            />
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project) => 
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
            )}
        </div>
    </>
  )
}

export default ProjectsSection