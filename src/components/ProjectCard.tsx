import { projectProps } from '../projectsInfo';

import './ProjectCard.css';

interface ProjectCardProps {
  project: projectProps;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, image, demo, repository, stacks = [] } = project;

  return (
    <div className="card">
      <img
        className="object-cover w-full lg:w-1/2 lg:object-contain rounded-t-md lg:rounded-none"
        src={`/static/images/${image}`}
        alt={`${name} cover`}
      />
      <div className="card-info-container">
        <h1 className="text-2xl font-medium text-gray-100">{name}</h1>
        <p className="italic">{description}</p>
        <div>
          <h2 className="text-md font-medium text-gray-100">Ferramentas</h2>
          <ul className="list-inside list-square flex lg:justify-evenly flex-wrap">
            {stacks.map((stack) => (
              <li key={stack} className="italic mx-2">
                {stack}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2 flex justify-evenly flex-wrap">
          <a href={demo} className="card-link" target="_blank" rel="noreferrer">
            Demonstração
          </a>
          <a
            href={repository}
            className="card-link"
            target="_blank"
            rel="noreferrer"
          >
            Repositório
          </a>
        </div>
      </div>
    </div>
  );
}
