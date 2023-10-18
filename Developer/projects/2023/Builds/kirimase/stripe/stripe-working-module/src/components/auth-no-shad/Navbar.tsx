import { getUserAuth } from "@/lib/auth/utils";
import Link from "next/link";

export default async function Navbar() {
  const { session } = await getUserAuth();
  if (session?.user) {
    return (
      <nav className="py-2 flex items-center justify-between transition-all duration-300">
        <h1 className="font-semibold hover:opacity-75 transition-hover cursor-pointer">
          <Link href="/">Logo</Link>
        </h1>
        <Link href="/account">
          <div className="w-8 h-8 bg-secondary rounded-full text-primary flex items-center justify-center hover:opacity-75 transition-all duration-300 cursor-pointer hover:ring-1 ring-zinc-300">
            {session?.user?.name ? session.user.name.slice(0, 1) : "~"}
          </div>
        </Link>
      </nav>
    );
  } else return null;
}
