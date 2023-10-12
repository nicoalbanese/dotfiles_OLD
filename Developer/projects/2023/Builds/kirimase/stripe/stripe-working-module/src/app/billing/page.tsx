import { ManageUserSubscriptionButton } from "@/components/billing/ManageUserSubscription";
import SignInBtn from "@/components/sign-in-btn";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { storeSubscriptionPlans } from "@/config/subscriptions";
import { getUserAuth } from "@/lib/auth/utils";
import { getUserSubscriptionPlan } from "@/lib/stripe/subscription";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Billing() {
  const { session } = await getUserAuth();
  const subscriptionPlan = await getUserSubscriptionPlan();

  if (!session) return redirect("/");

  return (
    <div className="min-h-[calc(100vh-57px)] py-8 px-4 md:px-16 lg:px-24">
      <Card className="p-6 mb-2">
        <p className="text-lg font-semibold leading-none">
          {subscriptionPlan.name}
        </p>
        <p className="text-sm text-muted-foreground">
          {!subscriptionPlan.isSubscribed
            ? "You are not subscribed to any plan."
            : subscriptionPlan.isCanceled
            ? "Your plan will be canceled on "
            : "Your plan renews on "}
          {subscriptionPlan?.stripeCurrentPeriodEnd
            ? subscriptionPlan.stripeCurrentPeriodEnd.toLocaleDateString()
            : null}
        </p>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {storeSubscriptionPlans.map((plan) => (
          <Card key={plan.id}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex items-end">
              {session?.user.email ? (
                <ManageUserSubscriptionButton
                  userId={session.user.id}
                  email={session.user.email || ""}
                  stripePriceId={plan.stripePriceId}
                  stripeCustomerId={subscriptionPlan?.stripeCustomerId}
                  isSubscribed={!!subscriptionPlan.isSubscribed}
                  isCurrentPlan={subscriptionPlan?.name === plan.name}
                />
              ) : (
                <div>
                  <p>Add email to continue</p>
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
