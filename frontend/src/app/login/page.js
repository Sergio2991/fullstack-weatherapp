import SignupForm from "../../components/SignupForm";
import SigninForm from "../../components/SigninForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-sky-100">
      <div className="flex gap-10">
        <SignupForm />
        <SigninForm />
      </div>
    </main>
  );
}
