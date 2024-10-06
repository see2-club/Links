"use client";

import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useSearchParams, useRouter } from "next/navigation";

import { loginTokenVerification } from "@/actions/login-token-verification";
// import { autoLogin } from "@/actions/auto-login"; // 假設有自動登入的 API
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const LoginTokenVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");

  const onSubmit = useCallback(async () => {
    if (success || error) return;

    if (!token) {
      setError("缺少驗證令牌！");
      return;
    }

    setLoading(true);
    try {
      const data = await loginTokenVerification(token);
      if (data.success) {
        setSuccess(data.success);
        // 登入成功後重定向至首頁
        router.push("/dashboard");
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("發生錯誤！");
    } finally {
      setLoading(false);
    }
  }, [token, success, error, router]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="確認您的驗證"
      backButtonLabel="返回登入"
      backButtonHref="/auth/login"
    >
      <div className="flex items-center w-full justify-center">
        {loading && <BeatLoader />}
        {success && <FormSuccess message={success} />}
        {error && <FormError message={error} />}
      </div>
    </CardWrapper>
  )
}