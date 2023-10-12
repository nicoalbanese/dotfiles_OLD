import * as z from "zod"
import { CompleteSession, relatedSessionSchema, CompleteKey, relatedKeySchema } from "./index"

export const userSchema = z.object({
  id: z.string(),
  username: z.string(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  stripeCustomerId: z.string().nullish(),
  stripeSubscriptionId: z.string().nullish(),
  stripePriceId: z.string().nullish(),
  stripeCurrentPeriodEnd: z.date().nullish(),
})

export interface CompleteUser extends z.infer<typeof userSchema> {
  auth_session: CompleteSession[]
  key: CompleteKey[]
}

/**
 * relatedUserSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedUserSchema: z.ZodSchema<CompleteUser> = z.lazy(() => userSchema.extend({
  auth_session: relatedSessionSchema.array(),
  key: relatedKeySchema.array(),
}))
