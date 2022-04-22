import React from 'react';
const profilePic = require('../images/profile-pic.jpeg');

// add typing animation do "Desenvolvedor Front-end"
export default function Home() {
  return (
    <main id="about" className='min-h-screen py-12 bg-zinc-800 text-white flex flex-col items-center'>
      <h1 className='flex flex-col text-center items-center mt-4'>Olá! Meu nome é
        <span className='text-5xl'>Braien Machado.</span>
        <span className='pt-2'>Desenvolvedor Full Stack</span>
      </h1>
      <img className='rounded-full w-36 shadow-md shadow-black mt-4' src={ profilePic } alt="Braien Machado" />
    </main>
  );
}
