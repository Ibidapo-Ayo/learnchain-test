import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { FormFieldTypes } from '@/lib/utils'
import { Input } from './ui/input'
import { Control } from 'react-hook-form'


type CustomProps = {
    control: Control<any>,
    fieldType: FormFieldTypes,
    name: string,
    placeholder?: string,
    label?: string,
    disabled?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode,
    type?: string
}

const RenderField = ({ field, props }: { field: any, props: CustomProps }) => {
    const { fieldType, placeholder, type, renderSkeleton } = props
    if (fieldType === FormFieldTypes.INPUT) {
        return (
            <FormControl>
                <Input
                    placeholder={placeholder}
                    {...field}
                    className='shad-input py-3 h-11 px-[16px] rounded-[2px] placeholder:text-gray-500 hover:bg-background hover:placeholder:text-black tracking-tight'
                    type={type || "text"}
                />
            </FormControl>
        )
    }

    if (fieldType === FormFieldTypes.SKELETON) {
        return renderSkeleton ? renderSkeleton(field) : null
    }
}

const CustomInput = (props: CustomProps) => {
    const { control, name, fieldType, label, placeholder } = props
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className='flex-1 w-full'>
                    {fieldType !== FormFieldTypes.CHECKBOX && label && (
                        <FormLabel className='text-black text-xs tracking-tight font-semibold'>{label}</FormLabel>
                    )}
                    <RenderField
                        field={field}
                        props={props}
                    />

                    <FormMessage className='text-red-500 text-xs' />
                </FormItem>
            )}
        />
    )
}

export default CustomInput