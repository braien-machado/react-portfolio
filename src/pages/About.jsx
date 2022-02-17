import React from 'react';
const profilePic = require('../images/profile-pic.jpeg');

export default function About() {
  return (
    <main className=' py-12 bg-gray-900 text-white flex flex-col items-center'>
      <h1 className='flex flex-col text-center items-center m-auto pt-2'>Olá! Meu nome é
        <span className='text-5xl'>Braien Machado.</span>
        <span className='pt-2'>Desenvolvedor Front-end</span>
      </h1>
      <img className='rounded-full w-36 my-4 shadow-md shadow-black' src={ profilePic } alt="Braien Machado" />
      <div>
        <p>Brasileiro, natural de Nova Friburgo, cidade da região serrana do estado do Rio de Janeiro. Sou casado e tenho 24 anos.</p>
        <p>Trabalho desde 2018 na área de Design Gráfico, Arte-finalização e produção de impressos. Sou uma pessoa apaixonada por exatas e por esse motivo ingressei no curso de Desenvolvimento Web da Trybe, o qual tem previsão de encerramento em julho de 2022, com o objetivo de mudar meu campo de atuação e expandir meus horizontes no mercado de trabalho.</p>
      </div>
    </main>
  )
}
