import Image from "next/image";

export const LogoOfHeader = () => {
  return (
    <div className="flex flex-row items-center space-x-4">
      <Image src={"/logo.jpg"} alt="" width={60} height={60} priority />
      <h1 className="font-semibold text-2xl">Gecko</h1>
    </div>
  );
};
