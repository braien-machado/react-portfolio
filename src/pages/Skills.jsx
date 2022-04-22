import React from 'react';
import SkillsLibrary from '../components/SkillsLibrary';
import { softSkills, hardSkills } from '../skillsInfo';


export default function Skills() {
  return (
    <main id="skills" className='min-h-screen py-12  bg-zinc-800 text-white'>
      <SkillsLibrary skills={hardSkills} title='Ferramentas e Linguagens' />
      <SkillsLibrary skills={softSkills} title='Características Interpessoais' />
    </main>
  );
}
