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
import { Spinner } from "@/components/ui/spinner"

export default function SingIn() {
  return (
    <form>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <Field className="relative">
          <FieldLabel htmlFor="email">Email</FieldLabel>

          <Input id="email" type="email" placeholder="john@gmail.com" />
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
          <Input id="password" placeholder="john@1234" type="password" />
        </Field>
        <Field>
          <Button className="text-md" type="submit">
            Login
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
            Don't have an account?
            <Link href={"/sign-up"} className="underline underline-offset-4">
              Sign up
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
