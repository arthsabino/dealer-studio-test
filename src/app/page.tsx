import { Banner } from "@/components/banners/banner";
import { CardGrid } from "@/components/card/card-grid/card-grid";
export default function Home() {
  return (
    <div>
      <Banner />
      <div className="content-container">
        <CardGrid />
      </div>
    </div>
  );
}
