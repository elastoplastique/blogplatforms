import React from 'react';
import * as FormPrimitive from '@radix-ui/react-form';

const FormDemo = () => (
  <FormPrimitive.Root className="w-[260px]">
    <FormPrimitive.Field className="grid mb-[10px]" name="email">
      <div className="flex items-baseline justify-between">
        <FormPrimitive.Label className="text-[15px] font-medium leading-[35px] text-white">Email</FormPrimitive.Label>
        <FormPrimitive.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
          Please enter your email
        </FormPrimitive.Message>
        <FormPrimitive.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
          Please provide a valid email
        </FormPrimitive.Message>
      </div>
      <FormPrimitive.Control asChild>
        <input
          className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          type="email"
          required
        />
      </FormPrimitive.Control>
    </FormPrimitive.Field>
    <FormPrimitive.Field className="grid mb-[10px]" name="question">
      <div className="flex items-baseline justify-between">
        <FormPrimitive.Label className="text-[15px] font-medium leading-[35px] text-white">Question</FormPrimitive.Label>
        <FormPrimitive.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
          Please enter a question
        </FormPrimitive.Message>
      </div>
      <FormPrimitive.Control asChild>
        <textarea
          className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
          required
        />
      </FormPrimitive.Control>
    </FormPrimitive.Field>
    <FormPrimitive.Submit asChild>
      <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
        Post question
      </button>
    </FormPrimitive.Submit>
  </FormPrimitive.Root>
);

export { FormPrimitive };
