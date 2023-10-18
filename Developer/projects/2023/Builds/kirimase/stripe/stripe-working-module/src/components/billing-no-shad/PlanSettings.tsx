"use client";
import {
  AccountCard,
  AccountCardBody,
  AccountCardFooter,
} from "../auth-no-shad/AccountCard";
import { Button } from "../ui/button";
import { useTransition } from "react";
import { useToast } from "../ui/use-toast";
import { storeSubscriptionPlans } from "@/config/subscriptions";

interface PlanSettingsProps {
  stripeSubscriptionId: string | null;
  stripeCurrentPeriodEnd: Date | null;
  stripeCustomerId: string | null;
  isSubscribed: boolean | "" | null;
  isCanceled: boolean;
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  stripePriceId?: string | undefined;
  price?: number | undefined;
}
export default function PlanSettings({
  subscriptionPlan,
  user,
}: {
  subscriptionPlan: PlanSettingsProps;
  user: { name?: string; id: string; email?: string };
}) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const { isSubscribed, stripeCustomerId } = subscriptionPlan;
  console.log(subscriptionPlan, user);

  const handleSubscription = async (
    e: React.SyntheticEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    startTransition(async () => {
      try {
        const res = await fetch("/api/billing/manage-subscription", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: user.email,
            userId: user.id,
            isSubscribed,
            stripeCustomerId,
            stripePriceId: storeSubscriptionPlans[0].stripePriceId,
          }),
        });
        const session: { url: string } = await res.json();
        if (session) {
          window.location.href = session.url ?? "/dashboard/billing";
        }
      } catch (err) {
        console.error((err as Error).message);
        toast({ description: "Something went wrong, please try again later." });
      }
    });
  };
  return (
    <AccountCard
      params={{
        header: "Your Plan",
        description: subscriptionPlan.isSubscribed
          ? `You are currently on the ${subscriptionPlan.name} plan.`
          : `You are not subscribed to any plan.`.concat(
              !user.email || user.email.length < 5
                ? " Please add your email to upgrade your account."
                : ""
            ),
      }}
    >
      <AccountCardBody>
        {subscriptionPlan.isSubscribed ? (
          <h3 className="font-semibold text-lg">
            ${subscriptionPlan.price ? subscriptionPlan.price / 100 : 0} / month
          </h3>
        ) : null}
        {subscriptionPlan.stripeCurrentPeriodEnd ? (
          <p className="text-sm mb-4 text-slate-500 ">
            Your plan will{" "}
            {!subscriptionPlan.isSubscribed
              ? null
              : subscriptionPlan.isCanceled
              ? "cancel"
              : "renew"}
            {" on "}
            <span className="font-semibold">
              {subscriptionPlan.stripeCurrentPeriodEnd.toLocaleDateString(
                "en-us"
              )}
            </span>
          </p>
        ) : null}
      </AccountCardBody>
      <AccountCardFooter description="Manage your subscription on Stripe.">
        <button
          disabled={!user.email || user.email.length < 5 || isPending}
          onClick={handleSubscription}
          className={`bg-slate-900 py-2.5 px-3.5 rounded-md font-medium text-white text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {subscriptionPlan.isSubscribed ? "Manage Subscription" : "Subscribe"}
        </button>
      </AccountCardFooter>
    </AccountCard>
  );
}
