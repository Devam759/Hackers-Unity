"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconArrowLeft, IconMail } from "@tabler/icons-react";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Password reset requested");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link
          href="/signin"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors mb-8"
        >
          <IconArrowLeft className="h-4 w-4" />
          Back to Sign In
        </Link>

        <div className="shadow-input mx-auto w-full rounded-2xl bg-zinc-900 p-8 border border-gray-800">
          <div className="text-center mb-2">
            <Link href="/" className="inline-block mb-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-400 via-accent-500 to-primary-600 bg-clip-text text-transparent">
                Hacker&apos;s Unity
              </h1>
            </Link>
          </div>

          {!submitted ? (
            <>
              <h2 className="text-xl font-bold text-neutral-200">
                Reset Your Password
              </h2>
              <p className="mt-2 max-w-sm text-sm text-neutral-400">
                Enter your email address and we&apos;ll send you a link to reset your password
              </p>

              <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-8">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" placeholder="hello@example.com" type="email" required />
                </LabelInputContainer>

                <button
                  className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                >
                  Send Reset Link &rarr;
                  <BottomGradient />
                </button>
              </form>

              <p className="mt-4 text-center text-sm text-neutral-400">
                Remember your password?{" "}
                <Link
                  href="/signin"
                  className="font-semibold text-neutral-200 hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconMail className="h-8 w-8 text-primary-400" />
              </div>
              <h2 className="text-xl font-bold text-neutral-200 mb-2">
                Check Your Email
              </h2>
              <p className="text-sm text-neutral-400 mb-6">
                We&apos;ve sent a password reset link to your email address
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-neutral-300 hover:underline"
              >
                Didn&apos;t receive the email? Try again
              </button>
            </div>
          )}
        </div>
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