import { Card } from "@/components/ui/card";

interface AccountCardProps {
  params: {
    header: string;
    description: string;
    price?: number;
  };
  children: React.ReactNode;
}

export function AccountCard({ params, children }: AccountCardProps) {
  const { header, description } = params;
  return (
    <Card className="">
      <div id="body" className="p-4 ">
        <h3 className="text-xl font-semibold">{header}</h3>
        <p className="text-slate-500">{description}</p>
      </div>
      {children}
    </Card>
  );
}

export function AccountCardBody({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}

export function AccountCardFooter({
  description,
  children,
}: {
  children: React.ReactNode;
  description: string;
}) {
  return (
    <div
      className="bg-slate-50 p-4 border border-zinc-200 flex justify-between items-center"
      id="footer"
    >
      <p className="text-slate-500 text-sm">{description}</p>
      {children}
    </div>
  );
}
