import React from 'react';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
// const profilePic = require('../assets/profile-pic.jpeg');

// add typing animation do "Desenvolvedor Front-end"
export default function Home() {
  return (
    <main id="home" className='relative min-h-screen py-12 bg-zinc-800 text-white flex flex-col md:flex-row items-center justify-evenly'>
      <h1 className='flex flex-col text-center md:items-start items-center m-4 text-3xl md:text-4xl cursor-default'>Olá! Meu nome é
        <span className='text-6xl md:text-6xl mt-4'>Braien Machado.</span>
        <span className='mt-4'>Desenvolvedor Full Stack</span>
      </h1>
      <img className='hidden md:block rounded-full w-36 shadow-md shadow-black mt-4 md:w-1/3' src="/src/assets/profile-pic.jpeg" alt="Braien Machado" />
      <div className='absolute bottom-7 flex w-32 justify-between'>
        <a className='hover:text-green-300 transition-colors' href='https://github.com/braien-machado' target='_blank' rel='noreferrer'>
            <AiOutlineGithub size={50} />
        </a>
        <a className='hover:text-green-300 transition-colors' href='https://linkedin.com/in/braien-machado' target='_blank' rel='noreferrer'>
          <AiFillLinkedin size={50} />
        </a>
      </div>
    </main>
  );
}
