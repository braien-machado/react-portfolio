import {
  FaReact,
  FaDocker,
  FaNodeJs,
  FaHandHoldingHeart,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillHtml5, AiOutlineGithub } from 'react-icons/ai';
import {
  DiCss3,
  DiSass,
  DiMongodb,
} from 'react-icons/di';
import {
  SiJest,
  SiRedux,
  SiTestinglibrary,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiGraphql,
  SiStyledcomponents,
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { BiConversation } from 'react-icons/bi';
import { RiTeamFill } from 'react-icons/ri';
import { GiBrain } from 'react-icons/gi';

const hardSkills = [
  [IoLogoJavascript, 'Javascript'],
  [SiTypescript, 'Typescript'],
  [SiPython, 'Python'],
  [AiFillHtml5, 'HTML 5'],
  [DiCss3, 'CSS 3'],
  [DiSass, 'Sass'],
  [SiTailwindcss, 'Tailwindcss'],
  [SiStyledcomponents, 'Styled/components'],
  [SiJest, 'Jest'],
  [FaReact, 'React'],
  [SiRedux, 'Redux'],
  [SiTestinglibrary, 'RTL'],
  [FaNodeJs, 'Node.js'],
  [GrMysql, 'MySQL'],
  [DiMongodb, 'MongoDB'],
  [SiGraphql, 'GraphQL'],
  [FaDocker, 'Docker'],
  [AiOutlineGithub, 'GitHub'],
];

const softSkills = [
  [BiConversation, 'Comunicação'],
  [RiTeamFill, 'Colaboração'],
  [FaHandHoldingHeart, 'Empatia'],
  [GiBrain, 'Inteligência/Emocional'],
];

export { hardSkills, softSkills };
