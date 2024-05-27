'use client';
import Image from "next/image";

import { useCallback, useState } from "react";
import { FieldValue, FieldValues, Resolver, SubmitHandler, useForm } from "react-hook-form";
import { BsGithub, BsGoogle, BsInstagram } from "react-icons/bs";

import Input from "../../components/inputs/input";
import Button from "@/app/components/Button";
import AuthSocialButton from "./AuthSocialButton";
import CreatePass from "@/app/components/CreatePass";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setvariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

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
            // Axios Register
        }
        if (variant == 'LOGIN') {
            // NextAuth SignIn
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        // NextAuth Social Sign In
    }

    const formSchema = Yup.object().shape({
        password: Yup
            .string()
            .max(32, "Max password length is 32")
            .required("Password is required")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
    });

    type FormValues = {
        password: string
      }
      
      const resolver: Resolver<FormValues> = async (values) => {
        return {
          values: values.password ? values : {},
          errors: !values.password
            ? {
                password: {
                  type: "required",
                  message: "This is required.",
                },
              }
            : {},
        }
      }

    return (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image alt="Logo" height="48" width="48" className="mx-auto w-auto" src="/images/logo.png" />
                <h2 className="mt-6 text-center text-3xl fond-bold tracking-tight text-gray-900">
                    {variant === 'LOGIN' ? 'Sign in' : 'Create your account'}
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        {variant === 'REGISTER' && (
                            <Input
                                id="name"
                                label="First Name"
                                register={register}
                                errors={errors} />
                        )}
                        {variant === 'REGISTER' && (
                            <Input
                                id="name"
                                label="Last Name"
                                register={register}
                                errors={errors} />
                        )}
                        <Input
                            id="email"
                            label="Email address"
                            type="email"
                            register={register}
                            errors={errors} />
                        <Input
                            id="password"
                            label="Password"
                            type="password"
                            register={register}
                            errors={errors} />
                        {variant === 'REGISTER' && (
                            <Input
                                id="password"
                                label="Password"
                                type="password"
                                register={register}
                                {...register("password")}
                                errors={errors.password?.message}
                            />
                        )}
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
                                icon={BsInstagram}
                                onClick={() => socialAction('instagram')}
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