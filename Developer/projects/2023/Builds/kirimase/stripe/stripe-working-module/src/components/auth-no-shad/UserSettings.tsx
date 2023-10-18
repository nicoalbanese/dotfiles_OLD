"use client";
import UpdateNameCard from "./UpdateNameCard";
import UpdateEmailCard from "./UpdateEmailCard";

export default function UserSettings({
  user,
}: {
  user: { name?: string; email?: string };
}) {
  return (
    <>
      <UpdateNameCard name={user.name ?? ""} />
      <UpdateEmailCard email={user.email ?? ""} />
    </>
  );
}
