import React from 'react';

export default function NotFound() {
  return (
    <main>
      <div>
        <img className='w-20' src={require('../images/broken-axe.png')} alt="broken axe" />
        <h1>Erro 404</h1>
      </div>
      <div>
        <h2>Página não encontrada</h2>
        <p>Utilize o menu de navegação para ir para outra página.</p>
      </div>
    </main>
  )
}
