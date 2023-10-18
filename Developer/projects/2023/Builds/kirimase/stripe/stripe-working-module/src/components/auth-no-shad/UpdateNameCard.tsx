"use client";
import { AccountCard, AccountCardFooter, AccountCardBody } from "./AccountCard";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

export default function UpdateNameCard({ name }: { name: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const form = new FormData(target);
    const { name } = Object.fromEntries(form.entries()) as { name: string };

    startTransition(async () => {
      const res = await fetch("/api/account", {
        method: "PUT",
        body: JSON.stringify({ name }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.status === 200) alert("Successfully updated name!");
      router.refresh();
    });
  };

  return (
    <AccountCard
      params={{
        header: "Your Name",
        description:
          "Please enter your full name, or a display name you are comfortable with.",
      }}
    >
      <form onSubmit={handleSubmit}>
        <AccountCardBody>
          <input
            defaultValue={name ?? ""}
            name="name"
            disabled={isPending}
            className="block text-sm w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-slate-700"
          />
        </AccountCardBody>
        <AccountCardFooter description="64 characters maximum">
          <button
            className={`bg-slate-900 py-2.5 px-3.5 rounded-md font-medium text-white text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
            disabled={isPending}
          >
            Update Name
          </button>
        </AccountCardFooter>
      </form>
    </AccountCard>
  );
}
