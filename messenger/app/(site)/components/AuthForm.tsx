'use client';
import Image from "next/image";

import { useCallback, useEffect, useState } from "react";
import { FieldValue, FieldValues, Resolver, SubmitHandler, useForm } from "react-hook-form";
import { BsDiscord, BsGithub, BsGoogle } from "react-icons/bs";

import Input from "../../components/inputs/input";
import Button from "@/app/components/Button";
import AuthSocialButton from "./AuthSocialButton";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const session = useSession();
    const router = useRouter();
    const [variant, setvariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (session?.status === 'authenticated') {
            router.push('/users')
        }
    }, [session?.status, router])

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setvariant('REGISTER');
        } else {
            setvariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            axios.post('/api/register', data)
                .then(() => toast.success('Sign Up Success!'))
                //.then(() => setvariant('LOGIN'))
                .then(() => signIn('credentials', data)) //both REGISTER and LOGIN
                .catch(() => toast.error('Something went wrong'))
                .finally(() => setIsLoading(false))
        }
        if (variant == 'LOGIN') {
            signIn('credentials', {
                ...data,
                redirect: false
            })
                .then((callback) => {
                    if (callback?.error) {
                        toast.error('Invalid credentials')
                    }
                    if (callback?.ok && !callback?.error) {
                        toast.success('Logged in!')
                        router.push('./users')
                    }
                })
                .finally(() => setIsLoading(false))
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        signIn(action, { redirect: false })
            .then((callback) => {
                if (callback?.error) {
                    toast.error('Invalid condentials')
                }

                if (callback?.ok) {
                    toast.success('Logged in!')
                }
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image alt="Logo" height="48" width="48" className="mx-auto w-auto" src="/images/logo.png" />
                <h1 className="mt-6 text-center text-3xl fond-bold tracking-tight">
                    {variant === 'LOGIN' ? 'Sign in' : 'Create your account'}
                </h1>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md xs:mx-auto xs:w-full xs:max-w-md">
                <div className="bg-white px-4 py-8 shadow sm:rounded-xl sm:px-10 xs:rounded-lg">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        {variant === 'REGISTER' && (
                            <Input
                                id="name"
                                label="Name"
                                register={register}
                                errors={errors}
                                disabled={isLoading}
                            />
                        )}
                        <Input
                            id="email"
                            label="Email address"
                            type="email"
                            register={register}
                            errors={errors}
                            disabled={isLoading}
                        />
                        <Input
                            id="password"
                            label="Password"
                            type="password"
                            register={register}
                            errors={errors}
                            disabled={isLoading}
                        />
                        <div>
                            <Button
                                disabled={isLoading}
                                fullWidth
                                type="submit"
                            >
                                {variant === 'LOGIN' ? 'Sign In' : 'Register'}
                            </Button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300">

                                </div>
                            </div>

                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-gray-500">
                                    Or coninue with
                                </span>
                            </div>

                        </div>

                        <div className="mt-6 flex gap-2">
                            <AuthSocialButton
                                icon={BsGithub}
                                onClick={() => socialAction('github')}
                            />
                            <AuthSocialButton
                                icon={BsGoogle}
                                onClick={() => socialAction('google')}
                            />
                            <AuthSocialButton
                                icon={BsDiscord}
                                onClick={() => socialAction('discord')}
                            />
                        </div>

                    </div>

                    <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                        <div>
                            {variant === 'LOGIN' ? `Don't have an account?` : 'Already have an account?'}
                        </div>
                        <div
                            onClick={toggleVariant}
                            className="underline cursor-pointer"
                        >
                            {variant === 'LOGIN' ? 'Create an account' : 'Login'}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AuthForm