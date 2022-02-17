import React from 'react';
import HardSkillsCards from '../components/HardSkillsCards';


export default function Skills() {
  return (
    <main className='min-h-screen py-12  bg-gray-900 text-white'>
      <h1>Hard Skills</h1>
      <HardSkillsCards />
      {/* <ul>
        <h2>Hard Skills</h2>
        <li data-testid="hard-skill">React</li>
      </ul>
      <ul>
        <h2>Soft Skills</h2>
        <li data-testid="soft-skill">Colaboração</li>
      </ul>
      <a href='#cv' id="cv">Veja meu currículo</a> */}
    </main>
  )
}
