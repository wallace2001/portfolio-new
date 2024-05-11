
import { FormEmail } from "@/components/form-email";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MdOutlineMailOutline } from "react-icons/md";

interface ICardEmail {
    email: string;
}

const CardEmail = ({ email }: ICardEmail) => {
    return (
        <Card className="bg-transparent border-foreground/10 w-full">
            <CardContent className="py-4">
                <div className="flex justify-start items-center">
                    <MdOutlineMailOutline className="text-foreground/80 mr-2 " size={20} />
                    <span className="text-[14px] font-bold">Entre em contato</span>
                </div>
                <p className="text-[13px] mt-2 text-foreground/50">Preenche os dados para contato.</p>
            </CardContent>
            <CardFooter className="items-center space-y-2 flex-col">
            <FormEmail email={email} />
            </CardFooter>
        </Card>
    );
}

export default CardEmail;