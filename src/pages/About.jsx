import React from 'react';
const profilePic = require('../images/profile-pic.jpeg');

// add typing animation do "Desenvolvedor Front-end"
export default function About() {
  return (
    <main className='min-h-screen py-12 bg-zinc-800 text-white flex flex-col items-center'>
      <h1 className='flex flex-col text-center items-center mt-4'>Olá! Meu nome é
        <span className='text-5xl'>Braien Machado.</span>
        <span className='pt-2'>Desenvolvedor Full Stack</span>
      </h1>
      <img className='rounded-full w-36 shadow-md shadow-black mt-4' src={ profilePic } alt="Braien Machado" />
      <div className='px-4 text-justify max-w-screen-sm mt-4'>
        <p>Brasileiro, natural de Nova Friburgo, cidade da região serrana do estado do Rio de Janeiro. Sou casado e tenho 24 anos.</p>
        <p className='mt-4'>Trabalhei de 2018 a 2022 na área de Design Gráfico, Arte-finalização e produção de impressos. Em julho de 2021, decidi por mudar de carreira e iniciei uma formação de Desenvolvimento Web Full Stack na Trybe. Atualmente já tenho experiência com projetos pessoais e do próprio curso tanto na área de Front End quanto de Back End e estou aberto a propostas para  trabalhar em empresas que poderão me ajudar a desenvolver minhas habilidades e a aprender novas técnicas e ferramentas.</p>
      </div>
    </main>
  );
}
