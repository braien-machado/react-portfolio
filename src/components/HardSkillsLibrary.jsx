import React from 'react';
import { FaReact, FaDocker, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillHtml5, AiOutlineGithub } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJest, SiRedux, SiTestinglibrary } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

const skills = [
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

const generateSkill = ([Icon, name]) => {
  return (
    <div key={name} className='m-2 shadow-md shadow-black bg-white rounded-full flex flex-col justify-center items-center w-52 h-52'>
      <Icon size={100}/>
      <h2 className='text-2xl'>{ name }</h2>
    </div>
  )
};

export default function HardSkills() {
  return (
    <div className=''>
      <h1 className='text-center text-4xl my-4'>Ferramentas e Linguagens</h1>
      <div className='flex flex-wrap justify-center text-gray-900'>
        { skills.map(generateSkill) }
      </div>
    </div>
  )
}
