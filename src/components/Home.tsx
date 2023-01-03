import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

import './Home.css';

export default function Home() {
  return (
    <section id="home">
      <h1 className="home-heading">
        Olá! Meu nome é
        <span className="text-6xl md:text-6xl mt-4">Braien Machado.</span>
        <span className="mt-4">Desenvolvedor Full Stack</span>
      </h1>
      <img
        className="hidden md:block rounded-full w-36 shadow-md shadow-black mt-4 md:w-1/3"
        src="/static/images/profile-pic.webp"
        alt="Braien Machado"
      />
      <div className="absolute bottom-7 flex w-32 justify-between">
        <a
          className="hover:text-green-300 transition-colors flex flex-col items-center"
          href="https://github.com/braien-machado"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub size={50} />
          Github
        </a>
        <a
          className="hover:text-green-300 transition-colors flex flex-col items-center"
          href="https://linkedin.com/in/braien-machado"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={50} />
          Linkedin
        </a>
      </div>
    </section>
  );
}
