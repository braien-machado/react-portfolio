import React from 'react';

export default function NotFound() {
  return (
    <main className='py-12 h-screen flex flex-col justify-center'>
      <div className='flex justify-center'>
        <img className='object-scale-down h-28 w-28' src={require('../images/broken-axe.png')} alt="broken axe" />
        <h1 className='text-6xl flex flex-col justify-center pl-2'>
          <span>Erro</span>
          <span>404</span>
        </h1>
      </div>
      <div className='text-center'>
        <h2 className='font-medium text-lg'>Página não encontrada :(</h2>
        <p>Utilize o menu de navegação para ir para outra página.</p>
      </div>
    </main>
  )
}
