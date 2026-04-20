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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { api } from "@/lib/http"
import { useAuth } from "@/lib/auth-context"
import { getDefaultDashboardPath } from "@/lib/auth-routes"
import { toast } from "sonner"

export default function SignUp() {
  const router = useRouter();
  const { refreshSession } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("PATIENT");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Create user
      await api.post("/auth/register", {
        firstName,
        lastName,
        email,
        password,
        role: role.toUpperCase(),
      });

      const loginRes = await api.post<{
        token: string
        user: { role: string }
      }>("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", loginRes.token);
      localStorage.setItem("user", JSON.stringify(loginRes.user));

      await refreshSession();
      toast.success("Account created. You are signed in.");
      router.push(getDefaultDashboardPath(loginRes.user.role));
    } catch (err: any) {
      setError(err.message);
      toast.error(err?.message ?? "Sign up failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Enter your details below to create your account
          </p>
        </div>
        
        {error && <div className="text-red-500 text-sm text-center font-medium bg-red-50 p-2 rounded-md">{error}</div>}

        <div className="flex gap-4 w-full">
          <Field className="relative w-1/2">
            <FieldLabel htmlFor="firstName">First Name</FieldLabel>
            <Input 
              id="firstName" 
              placeholder="John" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </Field>
          <Field className="relative w-1/2">
            <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
            <Input 
              id="lastName" 
              placeholder="Doe" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </Field>
        </div>
        
        <Field className="relative">
          <FieldLabel htmlFor="role">Account Role</FieldLabel>
          <Select value={role} onValueChange={(val) => setRole(val)}>
            <SelectTrigger id="role" className="w-full">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PATIENT">Patient</SelectItem>
              <SelectItem value="DOCTOR">Doctor</SelectItem>
              <SelectItem value="ADMIN">Administrator</SelectItem>
              <SelectItem value="RECEPTIONIST">Receptionist</SelectItem>
              <SelectItem value="PHARMACIST">Pharmacist</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field className="relative mt-2">
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input 
            id="email" 
            type="email" 
            placeholder="name@example.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Field>
        
        <Field className="relative mt-2">
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
          </div>
          <Input 
            id="password" 
            type="password" 
            placeholder="Create a secure password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Field>

        <Field className="mt-4">
          <Button className="w-full text-md" type="submit" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </Button>
        </Field>
        
        <FieldSeparator>Or continue with</FieldSeparator>
        
        <Field>
          <div className="flex w-full items-center justify-center gap-3">
            <Button type="button" className="w-1/2" variant="outline">
              Google
            </Button>
            <Button type="button" className="w-1/2" variant="outline">
              Github
            </Button>
          </div>
          <FieldDescription className="text-center mt-4">
            Already have an account?{" "}
            <Link
              href={"/sign-in"}
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              Sign in
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}