import React from 'react';
import SkillsLibrary from '../components/SkillsLibrary';
import { FaReact, FaDocker, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillHtml5, AiOutlineGithub } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJest, SiRedux, SiTestinglibrary } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

const hardSkills = [
  [AiOutlineGithub, 'GitHub'],
  [AiFillHtml5, 'HTML 5'],
  [DiCss3, 'CSS 3'],
  [IoLogoJavascript, 'Javascript'],
  [SiJest, 'Jest'],
  [FaReact, 'React'],
  [SiRedux, 'Redux'],
  [SiTestinglibrary, 'RTL'],
  [FaDocker, 'Docker'],
  [GrMysql, 'MySQL'],
  [FaNodeJs, 'Node.js'],
];

const softSkills = [

];


export default function Skills() {
  return (
    <main className='min-h-screen py-12  bg-gray-900 text-white'>
      <SkillsLibrary skills={hardSkills} title='Ferramentas e Linguagens' />
      <SkillsLibrary skills={softSkills} title='Características Interpessoais' />
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
