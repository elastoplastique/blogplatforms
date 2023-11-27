import React, { useState } from 'react';
import { FormPrimitive } from '@/components/ui/form';
import { Container, Flex, Heading, Text, Separator, Card, AspectRatio } from '@/components/ui';
import { LOGO } from '@/constants/image';
import { AUTH_SIGNUP_PATHNAME } from '@/lib/wix/constants';
import Link from 'next/link';

export const LoginForm = ({ onSubmit }: { onSubmit: any }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serverErrors, setServerErrors] = React.useState({
    email: false,
    password: false,
  });
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <FormPrimitive.Root
      className="w-[260px]"
      onSubmit={handleSubmit}
      onClearServerErrors={() => setServerErrors({ email: false, password: false })}
    >
      <FormPrimitive.Field className="grid mb-[10px]" name="email" serverInvalid={serverErrors.email}>
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
            onChange={handleEmailChange}
            className="box-border w-full bg-white shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
            type="email"
            value={email}
            required
          />
        </FormPrimitive.Control>
      </FormPrimitive.Field>
      <FormPrimitive.Field className="grid mb-[10px]" name="password" serverInvalid={serverErrors.password}>
        <div className="flex items-baseline justify-between">
          <FormPrimitive.Label className="text-[15px] font-medium leading-[35px] text-white">Password</FormPrimitive.Label>
          <FormPrimitive.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
            Please enter your password
          </FormPrimitive.Message>
          <FormPrimitive.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
            Please provide a valid password
          </FormPrimitive.Message>
        </div>
        <FormPrimitive.Control asChild>
          <input
            onChange={handlePasswordChange}
            className="box-border w-full bg-white shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
            type="password"
            value={password}
            required
          />
        </FormPrimitive.Control>
      </FormPrimitive.Field>
      <FormPrimitive.Submit asChild>
        <button
          type="submit"
          className="box-border w-full text-violet11 border-solid border-1 border-subtle-border bg-mauve1 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none  focus:outline-none mt-[10px]"
        >
          Login
        </button>
      </FormPrimitive.Submit>
      <Text size="1" py="4">
        {"Don't have an account? "}{' '}
        <Link href={AUTH_SIGNUP_PATHNAME} className="!underline">
          Create account.
        </Link>
      </Text>
    </FormPrimitive.Root>
  );
};

export default LoginForm;
