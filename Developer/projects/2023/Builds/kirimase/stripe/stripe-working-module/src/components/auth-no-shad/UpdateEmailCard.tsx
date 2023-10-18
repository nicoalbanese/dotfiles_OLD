import { AccountCard, AccountCardFooter, AccountCardBody } from "./AccountCard";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

export default function UpdateEmailCard({ email }: { email: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const form = new FormData(target);
    const { email } = Object.fromEntries(form.entries()) as { email: string };

    startTransition(async () => {
      const res = await fetch("/api/account", {
        method: "PUT",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.status === 200) alert("Successfully updated name!");
      router.refresh();
    });
  };

  return (
    <AccountCard
      params={{
        header: "Your Email",
        description:
          "Please enter the email address you want to use with your account.",
      }}
    >
      <form onSubmit={handleSubmit}>
        <AccountCardBody>
          <input
            defaultValue={email ?? ""}
            name="email"
            disabled={isPending}
            className="block text-sm w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-slate-700"
          />
        </AccountCardBody>
        <AccountCardFooter description="We will email vou to verify the change.">
          <button
            disabled={isPending}
            className={`bg-slate-900 py-2.5 px-3.5 rounded-md font-medium text-white text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Update Email
          </button>
        </AccountCardFooter>
      </form>
    </AccountCard>
  );
}
