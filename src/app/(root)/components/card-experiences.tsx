import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { MdOutlineWorkOutline } from "react-icons/md";

const CardExperiences = () => {
    return (
        <Card className="mt-10 bg-transparent border-foreground/10 w-full">
            <CardContent className="py-4">
                <div className="flex justify-start items-center">
                    <MdOutlineWorkOutline className="text-foreground/80 mr-2 " size={20} />
                    <span className="text-[14px] font-bold">Experiências</span>
                </div>
                <div className="flex justify-between items-center mt-8">
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
                            <span className="text-[13px]">Freelancer</span>
                            <span className="text-[12px] text-foreground/50 mt-2">Fullstack</span>
                        </div>
                    </div>
                    <span className="text-foreground/50 text-[12px]">2019 -- 2021</span>
                </div>
                <div className="flex justify-between items-center mt-8">
                    <div className="flex justify-between items-center">
                        <div className="w-10 h-10 bg-foreground/5 rounded-full flex justify-center items-center">
                            <Image
                                className="rounded-full"
                                width={30}
                                height={30}
                                src="https://media.licdn.com/dms/image/C4E0BAQEb5vzmGdGUeA/company-logo_200_200/0/1630611809498/audora_systems_logo?e=2147483647&v=beta&t=lA2XA93P_Rs67SuBbTjKGRRs0gUVG6sPcSXmXdIpRQA"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col ml-4">
                            <span className="text-[13px]">Audora</span>
                            <span className="text-[12px] text-foreground/50 mt-2">Fullstack</span>
                        </div>
                    </div>
                    <span className="text-foreground/50 text-[12px]">2021 -- 2024</span>
                </div>
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