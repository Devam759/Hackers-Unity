"use client";

import React from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";
import { MicrosoftIcon } from "@/components/ui/microsoft-icon";

export default function SignInPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="shadow-input mx-auto w-full max-w-md rounded-2xl bg-zinc-900 p-8 border border-gray-800">
        <div className="text-center mb-2">
          <Link href="/" className="inline-block mb-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-400 via-accent-500 to-primary-600 bg-clip-text text-transparent">
              Hacker&apos;s Unity
            </h1>
          </Link>
        </div>
        
        <h2 className="text-xl font-bold text-neutral-200">
          Welcome Back
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-400">
          Sign in to your account to continue to Hacker&apos;s Unity
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="hello@example.com" type="email" />
          </LabelInputContainer>
          
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-700 bg-zinc-800 text-primary-600 focus:ring-2 focus:ring-primary-500"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-neutral-400">
                Remember me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm text-neutral-300 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign in &rarr;
            <BottomGradient />
          </button>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

          <div className="flex flex-col space-y-4">
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-zinc-800 px-4 font-medium text-white shadow-[0px_0px_1px_1px_#262626]"
              type="button"
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-300" />
              <span className="text-sm text-neutral-300">
                GitHub
              </span>
              <BottomGradient />
            </button>
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-zinc-800 px-4 font-medium text-white shadow-[0px_0px_1px_1px_#262626]"
              type="button"
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-300" />
              <span className="text-sm text-neutral-300">
                Google
              </span>
              <BottomGradient />
            </button>
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-zinc-800 px-4 font-medium text-white shadow-[0px_0px_1px_1px_#262626]"
              type="button"
            >
              <MicrosoftIcon className="h-4 w-4 text-neutral-300" />
              <span className="text-sm text-neutral-300">
                Microsoft
              </span>
              <BottomGradient />
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-neutral-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-neutral-200 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};