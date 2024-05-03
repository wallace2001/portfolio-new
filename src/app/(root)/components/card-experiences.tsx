import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { format } from "date-fns";
import Image from "next/image";
import { MdOutlineWorkOutline } from "react-icons/md";

interface ICardExperiences {
    experiences: Experiences[];
}

const CardExperiences = ({ experiences }: ICardExperiences) => {

    console.log(experiences);

    return (
        <Card className="mt-10 bg-transparent border-foreground/10 w-full">
            <CardContent className="py-4">
                <div className="flex justify-start items-center">
                    <MdOutlineWorkOutline className="text-foreground/80 mr-2 " size={20} />
                    <span className="text-[14px] font-bold">Experiências</span>
                </div>
                {experiences?.map(experience => (
                <div key={experience.name} className="flex justify-between items-center mt-8">
                    <div className="flex justify-between items-center">
                        <div className="w-10 h-10 bg-foreground/5 rounded-full flex justify-center items-center">
                            <Image
                                width={30}
                                height={30}
                                src="https://freelancer.com.br/images/main-page/hit-card1.png"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col ml-4">
                            <span className="text-[13px]">{experience.name}</span>
                            <span className="text-[12px] text-foreground/50 mt-2">Fullstack</span>
                        </div>
                    </div>
                    <span className="text-foreground/50 text-[12px]">{format(experience.date.from, 'yyyy')} -- {format(experience.date.to, 'yyyy')}</span>
                </div>
                ))}
            </CardContent>
            <CardFooter>
                <Button className="mt-8 w-full">
                    Download CV
                </Button>
            </CardFooter>
        </Card>
    );
}

export default CardExperiences;