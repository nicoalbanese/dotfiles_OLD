import AuthForm from "@/components/auth/Form";
import { getUserAuth } from "@/lib/auth/utils";
import { redirect } from "next/navigation";

export default async function Home() {
  const { session } = await getUserAuth();
  if (!session) redirect("/sign-up");
  return (
    <main className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold my-2">Profile</h1>
      <pre className="bg-slate-100 p-6 rounded-lg my-2">
        {JSON.stringify(session, null, 2)}
      </pre>
      <AuthForm action="/api/sign-out" />
    </main>
  );
}