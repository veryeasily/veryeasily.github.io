import Link from "next/link.js";

import BasePage from "@/components/base_page";
import Text from "@/components/text";

export default function Home() {
  return (
    <BasePage>
      <div className="text-black">
        <h2 className="text-2xl">hey!!</h2>
        <p className="text-lg">this is where i plan to put stuff i do!</p>
      </div>
    </BasePage>
  );
}
