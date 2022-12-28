const handleWords = (string) => {
  const arrayString = string.split('/');
  if (arrayString.length > 1) {
    return arrayString.map((word) => (
      <h2 key={word} className="text-2xl">
        {word}
      </h2>
    ));
  }

  return <h2 className="text-2xl">{string}</h2>;
};

const generateSkill = ([Icon, name]) => (
  <div
    key={name}
    className="m-2 flex flex-col justify-center items-center w-40 h-40"
  >
    <Icon size={100} />
    {handleWords(name)}
  </div>
);

export default function SkillsLibrary({ skills, title }) {
  return (
    <div className="">
      <h1 className="text-center text-4xl my-4">{title}</h1>
      <div className="flex flex-wrap justify-center">
        {skills.map(generateSkill)}
      </div>
    </div>
  );
}
