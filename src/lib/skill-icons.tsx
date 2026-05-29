import type { IconType } from "react-icons";
import { FaGoogle, FaLinkedin } from "react-icons/fa6";
import {
  SiAffinitydesigner,
  SiC,
  SiCss,
  SiExpress,
  SiFigma,
  SiGatsby,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiXdadevelopers,
} from "react-icons/si";

export const skillIconMap: Record<string, IconType> = {
  figma: SiFigma,
  react: SiReact,
  c: SiC,
  node: SiNodedotjs,
  redux: SiRedux,
  javascript: SiJavascript,
  css3: SiCss,
  xd: SiXdadevelopers,
  nextjs: SiNextdotjs,
  gatsby: SiGatsby,
  illustrator: SiAffinitydesigner,
  express: SiExpress,
  mongodb: SiMongodb,
};

export const orbitIconMap: Record<string, IconType> = {
  linkedin: FaLinkedin,
  github: SiGithub,
  javascript: SiJavascript,
  react: SiReact,
  xd: SiXdadevelopers,
  illustrator: SiAffinitydesigner,
  css3: SiCss,
  figma: SiFigma,
  google: FaGoogle,
};
