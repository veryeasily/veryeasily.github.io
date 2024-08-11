import Text from "@/components/text";
import clsx from "clsx";

export interface BasePageProps {
  children: React.ReactNode;
}

export default function BasePage({ children }: BasePageProps) {
  return (
    <div
      className={clsx(
        "mx-auto flex w-full max-w-screen-sm flex-shrink-0 flex-grow flex-col px-4 text-base md:px-8",
      )}
    >
      {children}
    </div>
  );
}
