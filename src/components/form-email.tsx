"use client";

import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useMutation } from "@apollo/client";
import { SEND_CONTACT } from "@/app/graphql/actions/contact/create-contact.action";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Button } from "./ui/button";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Nome é obrigatório",
    }),
    phone: z.string().min(2, {
        message: "Telefone é obrigatório",
    }),
    description: z.string().min(2, {
        message: "Mensagem é obrigatória",
    }),
    email: z.string().email({
        message: "Email invalido.",
    }),
})

interface IFormEmail {
    email: string;
}

export const FormEmail = ({ email }: IFormEmail) => {
    const [sendEmailMutation] = useMutation(SEND_CONTACT);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            description: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        await sendEmailMutation({
            variables: {
                sendContactDto: {
                    name: values.name,
                    phone: values.phone,
                    email: values.email,
                    description: values.description,
                    emailPortfolio: email,
                }
            }
        }).then(() => {
            toast.success("Obrigado por enviar seus dados, entraremos em contato o quanto antes.");
            form.reset();
        });
    }

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Seu nome</FormLabel>
                        <FormControl>
                            <Input className="bg-foreground/5" placeholder="José da Silva" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Seu email</FormLabel>
                        <FormControl>
                            <Input className="bg-foreground/5" placeholder="email@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Seu Telefone</FormLabel>
                        <FormControl>
                            <Input className="bg-foreground/5" placeholder="(00) 0 0000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                            <Textarea className="bg-foreground/5 resize-none" placeholder="Digite sua mensagem" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button type="submit">Enviar</Button>
        </form>
    </Form>
    );
};