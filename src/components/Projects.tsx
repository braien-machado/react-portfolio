import ProjectCard from './ProjectCard';
import projectsInfo from '../projectsInfo';

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-12  bg-zinc-800 text-white"
    >
      <h1 className="text-4xl text-center my-4">Projetos</h1>
      <div className="flex justify-evenly flex-wrap">
        {projectsInfo.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
}
