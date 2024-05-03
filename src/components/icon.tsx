import { IconBaseProps } from 'react-icons';
import { CgCPlusPlus } from "react-icons/cg";
import { DiDjango, DiGoogleCloudPlatform, DiScrum } from "react-icons/di";
import { FaAngular, FaAws, FaDocker, FaEmber, FaFlask, FaGit, FaJava, FaJenkins, FaJira, FaNode, FaPython, FaReact, FaSwift, FaVuejs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiAnsible, SiGraphql, SiIbmcloud, SiJavascript, SiKubernetes, SiLaravel, SiMercurial, SiMicrosoftazure, SiMicrosoftsqlserver, SiMongodb, SiMysql, SiNestjs, SiPhp, SiPostgresql, SiRuby, SiRubyonrails, SiSelenium, SiSpring, SiSqlite, SiTypescript } from "react-icons/si";
import { TbBrandCSharp, TbBrandKotlin, TbBrandNextjs, TbBrandOauth, TbBrandSvelte } from "react-icons/tb";
interface IIconComponents extends IconBaseProps {
  icon:
    "react" |
    "javascript" |
    "typescript" |
    "python" |
    "php" |
    "java" |
    "csharp" |
    "cplusplus" |
    "ruby" |
    "swift" |
    "kotlin" |
    "go" |
    "angular" |
    "vue" |
    "svelte" |
    "node" |
    "ember" |
    "next" |
    "nest" |
    "laravel" |
    "flask" |
    "spring" |
    "rubyonrails" |
    "aspnet" |
    "mysql" |
    "postgresql" |
    "mongodb" |
    "sqlite" |
    "microsoftsqlserver" |
    "git" |
    "mercurial" |
    "aws" |
    "azure" |
    "gcp" |
    "ibm" |
    "docker" |
    "kubernetes" |
    "agile" |
    "scrum" |
    "kanban" |
    "devops" |
    "cicd" |
    "restapi" |
    "graphql" |
    "websockets" |
    "json" |
    "xml" |
    "grpc" |
    "jwt" |
    "oauth" |
    "selenium" |
    "jira" |
    "django" |
    "jenkins" |
    "ansible";
}

const iconComponents = {
  'javascript': SiJavascript,
  'react': FaReact,
  'typescript': SiTypescript,
  'python': FaPython,
  'php': SiPhp,
  'java': FaJava,
  'csharp': TbBrandCSharp,
  'cplusplus': CgCPlusPlus,
  'ruby': SiRuby,
  'swift': FaSwift,
  'kotlin': TbBrandKotlin,
  'go': FaGolang,
  'angular': FaAngular,
  'vue': FaVuejs,
  'svelte': TbBrandSvelte,
  'ember': FaEmber,
  'next': TbBrandNextjs,
  'nest': SiNestjs,
  'laravel': SiLaravel,
  'node': FaNode,
  'django': DiDjango,
  'flask': FaFlask,
  'spring': SiSpring,
  'rubyonrails': SiRubyonrails,
  'aspnet': undefined,
  'mysql': SiMysql,
  'postgresql': SiPostgresql,
  'mongodb': SiMongodb,
  'sqlite': SiSqlite,
  'microsoftsqlserver': SiMicrosoftsqlserver,
  'git': FaGit,
  'mercurial': SiMercurial,
  'aws': FaAws,
  'azure': SiMicrosoftazure,
  'gcp': DiGoogleCloudPlatform,
  'ibm': SiIbmcloud,
  'docker': FaDocker,
  'kubernetes': SiKubernetes,
  'agile': undefined,
  'scrum': DiScrum, 
  'kanban': undefined,
  'devops': undefined,
  'cicd': undefined,
  'restapi': undefined,
  'graphql': SiGraphql,
  'websockets': undefined,
  'json': undefined,
  'xml': undefined,
  'grpc': undefined,
  'jwt': undefined,
  'oauth': TbBrandOauth,
  'selenium': SiSelenium,
  'jira': FaJira,
  'jenkins': FaJenkins,
  'ansible' : SiAnsible,
  // Adicione mais ícones conforme necessário
};

const Icon = ({
  icon,
  ...rest
}: IIconComponents) => {
  const IconComponent = iconComponents[icon];

  return IconComponent && <IconComponent {...rest} />;
};

export default Icon;