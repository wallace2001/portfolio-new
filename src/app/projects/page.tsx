import ProjectItem from "./components/project-item";

const ProjectsPage = () => {
    return (
        <div className="mt-24">
            <div className="flex w-full flex-col">
                <p className="text-4xl md:text-5xl md:w-[70%] w-full text-foreground font-bold leading-10">Coisas que fiz tentando colocar minha marca no universo.</p>
                <p className="mt-4 text-sm text-foreground/80 md:w-[70%] w-full leading-7">Trabalhei em vários projetos ao longo dos anos, mas estes são os que mais me orgulham. Muitos deles são de código aberto, então se você encontrar algo que desperte seu interesse, confira o código e contribua se tiver ideias de como ele pode ser melhorado.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </div>
    );
}
 
export default ProjectsPage;