import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaJava, FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { SiDocker, SiJavascript, SiLaravel, SiMongodb, SiMysql, SiNestjs, SiPhp, SiPostgresql, SiSpring, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const TECHS = [
  {
    id: '1',
    title: 'Javascript',
    icon: <SiJavascript color="var(--foreground)" size={30} />,
  },
  {
    id: '2',
    title: 'React',
    icon: <FaReact color="var(--foreground)" size={30} />,
  },
  {
    id: '3',
    title: 'Typescript',
    icon: <SiTypescript color="var(--foreground)" size={30} />,
  },
  {
    id: '4',
    title: 'NodeJs',
    icon: <FaNodeJs color="var(--foreground)" size={30} />,
  },
  {
    id: '5',
    title: 'Express',
    icon: undefined,
  },
  {
    id: '6',
    title: 'NestJs',
    icon: <SiNestjs color="var(--foreground)" size={30} />,
  },
  {
    id: '7',
    title: 'NextJs',
    icon: <TbBrandNextjs color="var(--foreground)" size={30} />,
  },
  {
    id: '8',
    title: 'Java',
    icon: <FaJava color="var(--foreground)" size={30} />,
  },
  {
    id: '9',
    title: 'Spring boot',
    icon: <SiSpring color="var(--foreground)" size={30} />,
  },
  {
    id: '10',
    title: 'PHP',
    icon: <SiPhp color="var(--foreground)" size={30} />,
  },
  {
    id: '11',
    title: 'Laravel',
    icon: <SiLaravel color="var(--foreground)" size={30} />,
  },
  {
    id: '12',
    title: 'MySQL',
    icon: <SiMysql color="var(--foreground)" size={30} />,
  },
  {
    id: '13',
    title: 'MongoDB',
    icon: <SiMongodb color="var(--foreground)" size={30} />,
  },
  {
    id: '14',
    title: 'PostgreSQL',
    icon: <SiPostgresql color="var(--foreground)" size={30} />,
  },
  {
    id: '15',
    title: 'Docker',
    icon: <SiDocker color="var(--foreground)" size={30} />,
  },
];

export const SOCIAL_MEDIAS = [
  {
    id: "1",
    message: "Follow on X",
    icon: <BsTwitterX size={20} />,
  },
  {
    id: "2",
    message: "Follow on Instagram",
    icon: <IoLogoInstagram size={20} />,
  },
  {
    id: "3",
    message: "Follow on Github",
    icon: <FaGithub size={20} />,
  },
  {
    id: "4",
    message: "Follow on Linkedin",
    icon: <FaLinkedin size={20} />,
  },
];

export const ARTICLES = [
  {
    id: "1",
    day: "Setembro 5, 2022",
    title: "Criando um sistema de ecommerce completo com dashboard",
    description: "Nesse artigo você verá um pouco como foi criado o meu sistema de ecommerce, primeiramente vou explicar como funciona, as funcionalidades e tudo que é possivel fazer. Logo após estará disponivel como rodar o aplicado no seu ambiente.",
  },
  {
    id: "2",
    day: "Setembro 5, 2022",
    title: "Criando um sistema de ecommerce completo com dashboard",
    description: "Nesse artigo você verá um pouco como foi criado o meu sistema de ecommerce, primeiramente vou explicar como funciona, as funcionalidades e tudo que é possivel fazer. Logo após estará disponivel como rodar o aplicado no seu ambiente.",
  },
  {
    id: "3",
    day: "Setembro 5, 2022",
    title: "Criando um sistema de ecommerce completo com dashboard",
    description: "Nesse artigo você verá um pouco como foi criado o meu sistema de ecommerce, primeiramente vou explicar como funciona, as funcionalidades e tudo que é possivel fazer. Logo após estará disponivel como rodar o aplicado no seu ambiente.",
  },
];

export const OPTIONS = [
  {
      id: "1",
      value: "Home",
      link: "/"
  },
  {
      id: "2",
      value: "Sobre",
      link: "/about"
  },
  {
      id: "3",
      value: "Projetos",
      link: "/projects"
  },
  {
      id: "4",
      value: "Contato",
      link: "/speaking"
  },
];