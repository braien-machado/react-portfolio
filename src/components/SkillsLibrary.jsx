import React from 'react';

const handleWords = (string) => {
  const arrayString = string.split(' ');
  if (arrayString.length > 1) {
    return arrayString.map((word, index) => (
      <h2 key={`${index}-${word}`} className='text-2xl'>{word}</h2>
    ));
  }

  return (
    <h2 className='text-2xl'>{string}</h2>
  )
};

const generateSkill = ([Icon, name]) => {
  return (
    <div key={name} className='m-2 flex flex-col justify-center items-center w-40 h-40'>
      <Icon size={100} />
      { handleWords(name) }
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
  );
}
