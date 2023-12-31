"use client"

import projects from "@/helpers/constants/projects";
import ProjectItem from "./ProjectItem";

const Projects = (): JSX.Element => {

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center" id="projects">
      <h3 className="font-extrabold text-3xl md:text-5xl">Projetos</h3>
      <div className="mt-3 w-4/5 md:w-3/5 md:mt-10 flex flex-col justify-center items-center space-y-3 md:space-y-12">
        {
          projects.map((project, i) => (
            <ProjectItem 
              key={`project-${i}`}
              type={project.type}
              title={project.title}
              images={project.images}
              description={project.description}
              url={project.url}
              stack={project.stack}
            />
          ))
        }
      </div>
    </section>
  )

}

export default Projects;