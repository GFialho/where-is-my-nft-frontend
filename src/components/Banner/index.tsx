export default function Banner({
  nickname,
  description,
  address,
  totalCount,
}: {
  nickname: string;
  description: string;
  address: string;
  totalCount: number;
}) {
  return (
    <div className="mt-4 flex justify-start w-full">
      <div className="flex flex-col justify-start">
        <h1 className="text-2xl font-bold">{nickname || "Unnamed"}</h1>
        <span className="text-md font-bold">{totalCount || 0} NFTs</span>
        <span className="text-sm mt-4 text-slate-400">Address: {address}</span>
        <span className="truncate text-sm text-slate-400">{description}</span>
      </div>
    </div>
  );
}
