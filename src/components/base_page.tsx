import Text from "@/components/text";

export interface BasePageProps {
  children: React.ReactNode;
}

export default function BasePage({ children }: BasePageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-1 text-base">
      <div className="flex w-full max-w-screen-sm flex-col">
        <div className="flex flex-col">{children}</div>
      </div>
    </main>
  );
}
