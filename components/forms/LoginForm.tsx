"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'



import { z } from "zod"
import { Form } from '../ui/form'
import CustomInput from '../CustomInput'
import { FormFieldTypes } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'
import Divider from '../Divider'
import WalletConnect from '../WalletConnect'

const loginSchema = z.object({
    email: z.string({
        message: "Email field is required!"
    }).email({
        message: "Invalid email address"
    }),
    password: z.string().min(1, {
        message: "Password is required!"
    })
})

const LoginForm = () => {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    function onSubmit(values: z.infer<typeof loginSchema>) {
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-1'>
                <div className='space-y-4'>
                    <CustomInput
                        control={form.control}
                        name="email"
                        label='Email'
                        fieldType={FormFieldTypes.INPUT}
                        placeholder='name@email.com'
                    />
                    <CustomInput
                        control={form.control}
                        name="password"
                        label='Password'
                        fieldType={FormFieldTypes.INPUT}
                        placeholder='Enter your password'
                        type='password'
                    />

                </div>
                <div>
                    <Link className='text-blue-500 underline text-xs tracking-wide' href={"/"}>Forgot password?</Link>
                </div>

                <div className='py-5'>
                    <Button variant={"ghost"} type='submit' className='bg-blue-600 py-6 hover:bg-blue-700 w-full rounded-sm font-bold text-white hover:text-white'>Login</Button>
                </div>

                <Divider />

                <WalletConnect />
                <Divider />
                <div className="flex flex-col gap-4 max-w-sm mx-auto py-10">
                    <Button variant={"ghost"} className='border rounded-md border-textColor text-textColor tracking-tight hover:text-blue-700 flex h-auto py-3 hover:bg-background hover:bg-opacity-60'>
                        <Image src={"/icons/google.png"} alt='google' width={1000} height={1000} className='w-6' />

                        <span className='w-full font-semibold '>Continue with Google</span>
                    </Button>
                    <Button variant={"ghost"} className='border rounded-md border-textColor text-textColor tracking-tight hover:text-blue-700 flex h-auto py-3 hover:bg-background hover:bg-opacity-60'>
                        <Image src={"/icons/facebook.png"} alt='google' width={1000} height={1000} className='w-6' />

                        <span className='w-full font-semibold '>Continue with Facebook</span>
                    </Button>
                    <Button variant={"ghost"} className='border rounded-md border-textColor text-textColor tracking-tight hover:text-blue-700 flex h-auto py-3 hover:bg-background hover:bg-opacity-60'>
                        <Image src={"/icons/apple.png"} alt='google' width={1000} height={1000} className='w-6' />

                        <span className='w-full font-semibold '>Continue with Apple</span>
                    </Button>
                </div>



                <div>
                    <p className='text-center text-sm'>New to Coursera? <Link href="/" className='text-blue-500'>Sign up</Link></p>
                </div>

                <hr />

                <div className='w-full flex justify-center py-5'>
                    <Link href="/" className='text-blue-500 text-center underline text-sm'>Log in with your organization</Link>
                </div>
            </form>
        </Form>
    )
}

export default LoginForm