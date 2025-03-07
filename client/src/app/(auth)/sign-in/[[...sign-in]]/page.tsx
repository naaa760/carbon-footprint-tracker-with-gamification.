import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-green-500 hover:bg-green-600 text-sm normal-case",
        },
      }}
    />
  );
}
