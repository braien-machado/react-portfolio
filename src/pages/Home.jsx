import React from 'react';
const profilePic = require('../images/profile-pic.jpeg');

// add typing animation do "Desenvolvedor Front-end"
export default function Home() {
  return (
    <main id="home" className='min-h-screen py-12 bg-zinc-800 text-white flex flex-col md:flex-row items-center justify-evenly'>
      <h1 className='flex flex-col text-center items-center m-4 text-3xl md:text-4xl'>Olá! Meu nome é
        <span className='text-6xl md:text-6xl mt-4'>Braien Machado.</span>
        <span className='mt-4'>Desenvolvedor Full Stack</span>
      </h1>
      <img className='hidden md:block rounded-full w-36 shadow-md shadow-black mt-4 md:w-1/3' src={ profilePic } alt="Braien Machado" />
    </main>
  );
}
