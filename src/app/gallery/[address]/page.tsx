import Filters from "@/components/Filters";
import Collection from "@/components/Collection";
import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function Home({ params }: { params: { address: string } }) {
  return (
    <div className="flex flex-col h-screen items-center justify-center p-16">
      <Banner />
      <Header />
      <div className="flex flex-row justify-around w-full h-full mt-10">
        <Filters />
        <Collection address={params.address} />
      </div>
    </div>
  );
}
