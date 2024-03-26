"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MdOutlineMailOutline } from "react-icons/md";

const CardEmail = () => {
    return (
        <Card className="bg-transparent border-foreground/10 w-full">
            <CardContent className="py-4">
                <div className="flex justify-start items-center">
                    <MdOutlineMailOutline className="text-foreground/80 mr-2 " size={20} />
                    <span className="text-[14px] font-bold">Entre em contato</span>
                </div>
                <p className="text-[13px] mt-2 text-foreground/50">Envie seu email, assim que possivel entrarei em contato ou pode ligar para o número no rodapé do site</p>
            </CardContent>
            <CardFooter className="items-center space-y-2 flex-col">
                <Input className="bg-foreground/5" type="text" placeholder="Nome" />
                <Input className="bg-foreground/5" type="email" placeholder="Email" />
                <Input className="bg-foreground/5" type="text" placeholder="Telefone" />
                <Textarea placeholder="Digite sua mensagem..." className="bg-foreground/5 resize-none"/>
                <Button className="w-full mt-4" variant="secondary">
                    Enviar
                </Button>
            </CardFooter>
        </Card>
    );
}

export default CardEmail;