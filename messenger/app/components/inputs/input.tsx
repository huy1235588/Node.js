'use client';
import React, { useState } from 'react';

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { IoEye, IoEyeOff } from 'react-icons/io5';

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    type = 'text',
    required,
    register,
    errors,
    disabled
}) => {

    const [inputType, setInputType] = useState<string>(type);
    const togglePasswordType = () => {
        setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
    };

    return (
        <div className={type === "password" ? "relative" : ""}>
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <input
                id={id}
                type={inputType}
                autoComplete={'off'}
                disabled={disabled}
                {...register(id, { required })}
                className={clsx(`form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-sky-600 sm:text-sm sm:leading-6 transition hover:ring-emerald-500`,
                    errors[id] && "focus:ring-rose-500",
                    disabled && "opacity-50 cursor-default",
                )}
            />
            {type === 'password' && (
                <button
                    type="button"
                    onClick={togglePasswordType}
                    className="absolute top-1/2 right-2 inline-flex w-6 h-6 items-center justify-center rounded-full bg-white px-1.5 py-px-1.5 shadow-sm transition-colors hover:bg-gray-200"
                >
                    {inputType === 'password' ? < IoEyeOff /> : <IoEye />}
                </button>
            )}
        </div>
    )
};

export default Input;