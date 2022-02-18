import React from 'react';

const generateSkill = ([Icon, name]) => {
  return (
    <div key={name} className='m-2 flex flex-col justify-center items-center w-40 h-40'>
      <Icon size={100}/>
      <h2 className='text-2xl'>{ name }</h2>
    </div>
  )
};

export default function SkillsLibrary(props) {
  return (
    <div className=''>
      <h1 className='text-center text-4xl my-4'>{props.title}</h1>
      <div className='flex flex-wrap justify-center'>
        { props.skills.map(generateSkill) }
      </div>
    </div>
  )
}
