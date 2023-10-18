"use client";
import { User } from "lucia";
import UpdateNameCard from "./UpdateNameCard";
import UpdateEmailCard from "./UpdateEmailCard";

export default function UserSettings({ user }: { user: Partial<User> }) {
  return (
    <>
      <UpdateNameCard name={user.name ?? ""} />
      <UpdateEmailCard email={user.email ?? ""} />
    </>
  );
}
