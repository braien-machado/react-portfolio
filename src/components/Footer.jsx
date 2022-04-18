import React from 'react';

export default function Footer () {
  return (
    <footer className='relative' role="contentinfo">
      <div className='bg-zinc-800 text-gray-400 absolute bottom-0 py-2 w-full text-left shadow-white shadow-sm' >
        <span data-testid="footer-text" className='ml-2'>Desenvolvido por Braien Machado.</span>
      </div>
    </footer>
  );
}
