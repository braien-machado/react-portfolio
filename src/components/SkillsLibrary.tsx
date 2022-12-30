import { SkillType } from '../skillsInfo';

interface SkillsLibraryProps {
  skills: SkillType[];
  title: string;
}

export default function SkillsLibrary({ skills, title }: SkillsLibraryProps) {
  return (
    <div className="">
      <h1 className="text-center text-4xl my-4">{title}</h1>
      <div className="flex flex-wrap justify-center">
        {skills.map(([Icon, name]: SkillType) => (
          <div
            key={name}
            className="m-2 flex flex-col justify-start items-center w-40 h-40"
          >
            <Icon size={100} />
            <h2 className="text-2xl text-center">{name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
