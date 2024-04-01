/* eslint-disable @next/next/no-async-client-component */
"use client";

import { LOGIN_USER } from "@/app/graphql/actions/login.action";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import cookie from 'cookiejs';
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
    password: z.string().min(6, {
        message: "Senha deve ser maior do que 6 caracteres",
    }),
    email: z.string().email({
        message: "Email invalido.",
    }),
})


const AuthPage = () => {
    const [Login, { loading }] = useMutation(LOGIN_USER);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        const loginData = {
            email: data.email,
            password: data.password,
          };
          const response = await Login({
            variables: loginData,
          });
          if (response.data.Login.user) {
            toast.success("Entrando...");
            cookie('access_token', response.data.Login.accessToken);
            cookie('refresh_token', response.data.Login.refreshToken);

            await signIn("credentials", {
                email: data.email,
                password: data.password,
                callbackUrl: '/dashboard',
            });
            form.reset();
            // window.location.reload();
          } else {
            toast.error(response.data.Login.error.message);
          }
    }

    return (
        <div className="w-full h-full lg:grid lg:grid-cols-8 flex items-center justify-center">
            <div className="w-full h-[100vh] col-span-3 bg-background flex flex-col justify-center items-center">
                <p className="text-foreground font-bold text-[17px]">Bem vindo de volta!</p>
                <p className="text-foreground/70 text-sm mt-2 mb-8">Por favor, faça o login para continuar</p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full px-4 lg:px-16">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>E-mail</FormLabel>
                                    <FormControl>
                                        <Input className="bg-foreground/5 h-14" placeholder="email@email.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Senha</FormLabel>
                                    <FormControl>
                                        <Input type="password" className="bg-foreground/5 h-14" placeholder="Senha" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Lembrar de mim 
                                </label>
                            </div>

                            <Link href="#" className="text-sm">Esqueceu a senha ?</Link>
                        </div>

                        <Button type="submit" className="w-full h-14">Login</Button>
                    </form>
                </Form>
            </div>
            <div className="col-span-5 bg-foreground/5 h-[100vh] hidden lg:flex justify-center items-center">
                <Image
                    width={500}
                    height={500}
                    src='/auth.svg'
                    alt=""
                />
            </div>
        </div>
    );
}

export default AuthPage;