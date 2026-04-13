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

export default function SignUp() {
  return (
    <form>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Enter your details below to create your account
          </p>
        </div>
        
        <Field className="relative">
          <FieldLabel htmlFor="role">Account Role</FieldLabel>
          <Select defaultValue="patient">
            <SelectTrigger id="role" className="w-full">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="patient">Patient</SelectItem>
              <SelectItem value="doctor">Doctor</SelectItem>
              <SelectItem value="admin">Administrator</SelectItem>
              <SelectItem value="receptionist">Receptionist</SelectItem>
              <SelectItem value="pharmacist">Pharmacist</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field className="relative mt-2">
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="name@example.com" />
        </Field>
        
        <Field className="relative mt-2">
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
          </div>
          <Input id="password" type="password" placeholder="Create a secure password" />
        </Field>

        <Field className="mt-4">
          <Button className="w-full text-md" type="submit">
            Create Account
          </Button>
        </Field>
        
        <FieldSeparator>Or continue with</FieldSeparator>
        
        <Field>
          <div className="flex w-full items-center justify-center gap-3">
            <Button
              type="button"
              className="w-1/2"
              variant="outline"
            >
              Google
            </Button>
            <Button
              type="button"
              className="w-1/2"
              variant="outline"
            >
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
