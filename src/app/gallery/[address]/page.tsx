import Filters from "@/app/components/Filters";
import Collection from "@/app/components/Collection";
import Banner from "@/app/components/Banner";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center p-16">
      <Banner />
      <div className="flex flex-row justify-between w-full h-full bg-white">
        <Filters />
        <Collection />
      </div>
    </div>
  );
}
