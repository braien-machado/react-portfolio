import React from 'react';
import SkillsLibrary from '../components/SkillsLibrary';
import { softSkills, hardSkills } from '../skills';


export default function Skills() {
  return (
    <main className='min-h-screen py-12  bg-gray-900 text-white'>
      <SkillsLibrary skills={hardSkills} title='Ferramentas e Linguagens' />
      <SkillsLibrary skills={softSkills} title='Características Interpessoais' />
    </main>
  );
}
