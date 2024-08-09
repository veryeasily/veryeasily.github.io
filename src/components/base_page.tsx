import Link from "next/link.js";

import Text from "@/components/text";

export interface BasePageProps {
  header: string;
  children: React.ReactNode;
}

export default function BasePage({ header, children }: BasePageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-1 p-24 text-base">
      <h1>
        <Link href="/" className="text-lime-500 underline">
          <Text>Luke Underwood</Text>
        </Link>
      </h1>

      <div className="flex w-full max-w-screen-sm flex-col">
        <h2 className="mb-1 border-b border-black text-xs">
          <Text>{header}</Text>
        </h2>

        <div className="flex flex-col">{children}</div>
      </div>
    </main>
  );
}
