import React from 'react';
const profilePic = require('../images/profile-pic.jpeg');

// add typing animation do "Desenvolvedor Front-end"
export default function About() {
  return (
    <main className='min-h-screen py-12 bg-zinc-800 text-white flex flex-col items-center'>
      <h1 className='flex flex-col text-center items-center mt-4'>Olá! Meu nome é
        <span className='text-5xl'>Braien Machado.</span>
        <span className='pt-2'>Desenvolvedor Front-end</span>
      </h1>
      <img className='rounded-full w-36 shadow-md shadow-black mt-4' src={ profilePic } alt="Braien Machado" />
      <div className='px-4 text-justify max-w-screen-sm mt-4'>
        <p>Brasileiro, natural de Nova Friburgo, cidade da região serrana do estado do Rio de Janeiro. Sou casado e tenho 24 anos.</p>
        <p className='mt-4'>Trabalho desde 2018 na área de Design Gráfico, Arte-finalização e produção de impressos. Ingressei no curso de Desenvolvedor FullStack da <a className='hover:underline' href='https://www.betrybe.com/' target='_blank' rel='noreferrer'>Trybe</a>, o qual tem previsão de encerramento em julho de 2022, com o objetivo de mudar meu campo de atuação e expandir meus horizontes no mercado de trabalho.
        Em fevereiro de 2022 recebi meu certificado de Desenvolvedor Front-End e atualmente estou estudando Back-End.</p>
      </div>
    </main>
  );
}
