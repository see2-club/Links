"use client";

import * as z from "zod";
import { SetStateAction, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema, SolanaSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "@/components/auth/card-wrapper"
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
// import { register } from "@/actions/register";
import { loginSolanaVerification } from '@/actions/login-solana-verification';
import { SolanaSign } from '@/components/web3/signin';
import { getCsrfToken } from "next-auth/react"
import { toast } from "sonner"



export const Web3SigninForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const [signature, setSignature] = useState<object | null>(null);
  const [csrfToken, setCsrfToken] = useState<string | null>(null);

  const handleSignNatureChange = async (newSignNature: SetStateAction<object | null>) => {
    if (!newSignNature) return;
    const { message, redirect, signature, walletAddress, publicKey } = newSignNature as any;
    const csrfToken = await getCsrfToken()
    setSignature(newSignNature);
    setCsrfToken(csrfToken);
    form.setValue("message", csrfToken); // 將值設置到表單中
    form.setValue("signature", signature); // 將值設置到表單中
    form.setValue("walletAddress", walletAddress); // 將值設置到表單中

    console.log("Updated signature:", newSignNature); // 可以在這裡處理 signature
  };

  const CombinedSchema = RegisterSchema.merge(SolanaSchema);
  const form = useForm<z.infer<typeof CombinedSchema>>({
    resolver: zodResolver(CombinedSchema),
    defaultValues: {
      handle: "test001",
      email: "test001@example.com",
      password: "test001@example.com",
      name: "test001",
      // 添加 SolanaSchema 中的默認值
      message: "", // 替換為 SolanaSchema 中的字段
      signature: "", // 替換為 SolanaSchema 中的字段
      walletAddress: "", // 替換為 SolanaSchema 中的字段  
    },
  });

  const onSubmit = (values: z.infer<typeof CombinedSchema>) => {
    alert('onSubmit');
    setError("");
    setSuccess("");
    console.log("onSubmit", values);
    toast.success('Sign success');
    toast("loginSolanaVerification");

    startTransition(() => {
      loginSolanaVerification(values)
        .then((data) => {
          setError(data.error);
          setSuccess(data.success);
        });
    });
  };

  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
      showSocial
    >

      <div className='flex flex-col w-full min-h-18 h-full '>
        <div className='flex flex-col w-full h-full justify-center items-center'>
          <SolanaSign onSignNatureChange={handleSignNatureChange} />
        </div>
        {/* <p className="w-12">{JSON.stringify(signature)}</p> */}
      </div>
      {signature && (signature as { signature: string }).signature ?
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              {/* 隱藏的欄位 1 */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <Input
                      {...field}
                    type="hidden" // 設置為隱藏欄位
                    />
                    <FormMessage />
                  </FormItem>
                )} />
              {/* 隱藏的欄位 2 */}
              <FormField
                control={form.control}
                name="signature"
                render={({ field }) => (
                  <FormItem>
                    <Input
                      {...field}
                    type="hidden" // 設置為隱藏欄位
                    />
                    <FormMessage />
                  </FormItem>
                )} />
              {/* 隱藏的欄位 3 */}
              <FormField
                control={form.control}
                name="walletAddress"
                render={({ field }) => (
                  <FormItem>
                    <Input
                      {...field}
                    type="hidden" // 設置為隱藏欄位
                    />
                    <FormMessage />
                  </FormItem>
                )} />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Your name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="handle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Handle</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Your special handle"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="see.2.link@example.com"
                        type="email"
                      />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="******"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              disabled={isPending}
              type="submit"
              className="w-full"
            >
              Create an account
            </Button>
          </form>
        </Form>
        : null}
    </CardWrapper>
  );
};
