import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

export const SOCIAL_MEDIAS = {
  "x": {
    id: "1",
    message: "X",
    icon: <BsTwitterX size={20} />,
  },
  "instagram": {
    id: "2",
    key: "instagram",
    message: "Instagram",
    icon: <IoLogoInstagram size={20} />,
  },
  "github": {
    id: "3",
    key: "github",
    message: "Github",
    icon: <FaGithub size={20} />,
  },
  "linkedin": {
    id: "4",
    key: "linkedin",
    message: "Linkedin",
    icon: <FaLinkedin size={20} />,
  }
};

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