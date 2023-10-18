import UserSettings from "@/components/auth/UserSettings";
import PlanSettings from "@/components/billing/PlanSettings";
import { checkAuth, getUserAuth } from "@/lib/auth/utils";
import { getUserSubscriptionPlan } from "@/lib/stripe/subscription";

export default async function Account() {
  await checkAuth();
  const { session } = await getUserAuth();
  const subscriptionPlan = await getUserSubscriptionPlan();

  return (
    <main>
      <h1 className="text-3xl font-semibold my-6">Account</h1>
      <div className="space-y-6">
        <PlanSettings
          subscriptionPlan={subscriptionPlan}
          user={session?.user!}
        />
        <UserSettings user={session?.user!} />
      </div>
    </main>
  );
}
