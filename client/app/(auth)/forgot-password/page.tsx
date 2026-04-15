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

export default function ForgotPassword() {
  return (
    <form>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Forgot your password?</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Enter your email below to reset your password
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="m@example.com"
            required
          />
        </Field>
        <Field>
          <Button type="submit" >
            Send
          </Button>
        </Field>

        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <FieldDescription className="text-center">
            Already have an account?{" "}
            <Link href={"/sign-in"} className="underline underline-offset-4">
              Sign in
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}