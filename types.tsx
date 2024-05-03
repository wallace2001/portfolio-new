interface Tech {
    name: string;
    icon:     "react" |
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
};

interface Article {
    id: string;
    title: string;
    description: string;
    content: string;
    createdAt: string;
}

interface Experiences {
    name: string;
    date: {
        from: string;
        to: string;
    }
}

interface Contact {
    title: string;
    description: string;
}

interface ProjectPage {
    title: string;
    description: string;
}

interface Project {
    id: string;
    title: string;
    description: string;
    content: string;
    image: {
        url: string;
    }
    createdAt: string;
}

interface User {
    name: string;
    phone_number: string;
    email: string;
    avatar: {
        id: string;
        url: string;
    };
    Article: Article[];
    Project: Project[];
    ProfileUser: {
        title: string;
        description: string;
        about: string;
        techs: Tech[];
        links: {
            name: string;
            icon: string;
        }[];
        Contact: Contact;
        ProjectPage: ProjectPage;
        linkProfiles: {
            link: {
                name: string;
                icon: "x" | "instagram" | "linkedin" | "github";
            };
            linkUrl: string;
        }[];
        experiences: Experiences[];
    }
}