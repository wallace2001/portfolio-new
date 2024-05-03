"use client";

import { getUserAbout, getUserContact } from "@/actions/fetch-profile";
import ClientOnly from "@/components/ClientOnly";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { SOCIAL_MEDIAS } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { z } from "zod";
import NotFound from "../not-found";

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

const SpeakingPage = () => {
    const [profile, setProfile] = useState<User>();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            description: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const fetchUser = async () => {
        try {
            const u = await getUserContact();
            setProfile(u);
        } catch (error) {
            
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    if (!profile) {
        return (
            <NotFound />
        );
    }

    return (
        <ClientOnly>
            <div className="mt-24">
                <div className="flex w-full flex-col">
                    <p className="text-4xl md:text-5xl md:w-[70%] w-full text-foreground font-bold leading-10">{profile?.ProfileUser.Contact.title}</p>
                    <p className="mt-4 text-sm text-foreground/80 md:w-[70%] w-full leading-7">{profile?.ProfileUser.Contact.description}</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row md:gap-6 mt-2">
                        {profile?.ProfileUser?.linkProfiles?.map(social => (
                            <Link target="_blank" href={social.linkUrl} key={social.linkUrl} className="text-foreground/50 hover:text-foreground/70">
                                {SOCIAL_MEDIAS[social.link.icon].icon}
                            </Link>
                        ))}
                    </div>

                    <Separator className="my-8" />

                    <Link href="#" className="my-2 flex flex-row items-center text-foreground/50 hover:text-[#2CBDAA]">
                        <MdEmail color="var(--foreground/80)" />
                        <p className="text-[13px] ml-2 font-bold">{profile?.email}</p>
                    </Link>
                </div>
                <Separator className="my-10" />
                <div className="border p-4 nd:p-8 border-foreground/10 rounded-md mt-10">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                </div>
            </div>
        </ClientOnly>
    );
}

export default SpeakingPage;