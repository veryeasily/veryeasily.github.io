import BasePage from "@/components/base_page";
import Artwork from "@/components/artwork";
import { IMG_LIST } from "@/lib/constants";

export default function ArtPage() {
  return (
    <BasePage>
      <h3 className="text-2xl">artwork here:</h3>

      <div>
        {IMG_LIST.map((src) => (
          <Artwork src={src} key={src} />
        ))}
      </div>
    </BasePage>
  );
}
