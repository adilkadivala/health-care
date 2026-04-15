"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  FieldGroup,
  Field,
  FieldSeparator,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { api } from "@/lib/http"
import { useAuth } from "@/lib/auth-context"
import { getDefaultDashboardPath } from "@/lib/auth-routes"

export default function SignIn() {
  const router = useRouter();
  const { refreshSession } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await api.post<{
        token: string
        user: { role: string }
      }>("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      await refreshSession();
      router.push(getDefaultDashboardPath(data.user.role));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        
        {error && <div className="text-red-500 text-sm text-center font-medium bg-red-50 p-2 rounded-md">{error}</div>}

        <Field className="relative">
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input 
            id="email" 
            type="email" 
            placeholder="john@gmail.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Field>
        <Field className="relative">
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Link
              href={"/forgot-password"}
              className="ml-auto text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input 
            id="password" 
            placeholder="john@1234" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Field>
        <Field>
          <Button className="text-md" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <div className="flex w-full items-center justify-center gap-1">
            <Button
              type="button"
              className="w-1/2"
              variant="outline"
              size="icon"
            >
              Google
            </Button>
            <Button
              type="button"
              className="w-1/2"
              variant="outline"
              size="icon"
            >
              Github
            </Button>
          </div>
          <FieldDescription className="text-center">
            Don't have an account?{" "}
            <Link href={"/sign-up"} className="underline underline-offset-4 text-primary font-semibold">
              Sign up
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}