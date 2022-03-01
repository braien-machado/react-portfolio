import { FaReact, FaDocker, FaNodeJs, FaHandHoldingHeart } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillHtml5, AiOutlineGithub } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJest, SiRedux, SiTestinglibrary } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { BiConversation } from 'react-icons/bi';
import { RiTeamFill } from 'react-icons/ri'
import { GiBrain } from 'react-icons/gi';

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
  [BiConversation, 'Comunicação'],
  [RiTeamFill, 'Colaboração'],
  [FaHandHoldingHeart, 'Empatia'],
  [GiBrain, 'Inteligência/Emocional'],
];

export { hardSkills, softSkills };