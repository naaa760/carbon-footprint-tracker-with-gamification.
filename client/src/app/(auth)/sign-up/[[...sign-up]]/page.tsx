import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <SignUp
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-green-500 hover:bg-green-600 text-sm normal-case",
        },
      }}
    />
  );
}
