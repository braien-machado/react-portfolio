import SkillsLibrary from './SkillsLibrary';
import { softSkills, hardSkills } from '../skillsInfo';

export default function Skills() {
  return (
    <main id="skills" className="min-h-screen py-12  bg-white text-zinc-800">
      <SkillsLibrary skills={hardSkills} title="Ferramentas e Linguagens" />
      <SkillsLibrary
        skills={softSkills}
        title="Características Interpessoais"
      />
    </main>
  );
}
