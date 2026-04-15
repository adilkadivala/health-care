import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator} from "@/components/ui/input-otp"
import Link from "next/link"

export default function Verify() {
  return (
    <form>
      <FieldGroup>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-xl font-bold">Enter verification code</h1>
          <FieldDescription>
            We sent a 6-digit code to your{" "}
            <span className="text-primary">`email`</span> address
          </FieldDescription>
        </div>
        <Field className="mx-auto">
          <FieldLabel htmlFor="otp" className="sr-only">
            Verification code
          </FieldLabel>
          <InputOTP
            maxLength={6}
            required
            containerClassName="gap-4"
            className="inset-0"
          >
            <div className="flex w-full items-center justify-center">
              <InputOTPGroup className="gap-2.5 *:data-[slot=input-otp-slot]:h-16 *:data-[slot=input-otp-slot]:w-12 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border *:data-[slot=input-otp-slot]:text-xl">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup className="gap-2.5 *:data-[slot=input-otp-slot]:h-16 *:data-[slot=input-otp-slot]:w-12 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border *:data-[slot=input-otp-slot]:text-xl">
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </div>
          </InputOTP>

          <FieldDescription className="text-center">
            Didn't receive the code?{" "}
            <Button
              asChild
              variant="ghost"
              className="dark:hover:bg-none"
            >
              <Link href="#">resend</Link>
            </Button>
          </FieldDescription>
        </Field>
        <Field>
          <Button type="submit">
            Verify
          </Button>
        </Field>
      </FieldGroup>
    </form>
  )
}