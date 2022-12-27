import './ProjectCard.css';

export default function ProjectCard({ project, index }) {
  const {
    name,
    description,
    image,
    demo,
    repository,
    stacks = [],
  } = project;

  if (!name) {
    return (
      <div
        key={index}
        className="border-zinc-700 border-2 shadow-md duration-300 rounded-md w-4/5 p-2 mb-4"
      >
        <h1 className="text-2xl font-medium">Em breve</h1>
        <p className="italic text-gray-500">Projeto em desenvolvimento...</p>
      </div>
    );
  }

  return (
    <div key={index} className="card">
      <img
        className="object-cover w-full lg:w-1/2 lg:object-contain rounded-t-md lg:rounded-none"
        src={`./src/assets/${image}`}
        alt={`${name} cover`}
      />
      <div className="card-info-container">
        <h1 className="text-2xl font-medium text-gray-100">{name}</h1>
        <p className="italic">{description}</p>
        <ul className="list-inside list-square">
          <h2 className="text-md font-medium text-gray-100">Ferramentas</h2>
          <div className="flex lg:justify-evenly flex-wrap">
            {stacks.map((stack) => (
              <li key={stack} className="italic mx-2">
                {stack}
              </li>
            ))}
          </div>
        </ul>
        <div className="mt-2 flex justify-evenly flex-wrap">
          <a href={demo} target="_blank" rel="noreferrer">
            <button type="button" className="card-button">
              Demonstração
            </button>
          </a>
          <a href={repository} target="_blank" rel="noreferrer">
            <button type="button" className="card-button">
              Repositório
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
