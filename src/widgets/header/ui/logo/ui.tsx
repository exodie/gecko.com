import Image from "next/image";

export const LogoOfHeader = () => {
  return (
    <div className="flex flex-row items-center space-x-4">
      <Image src={"/logo.jpg"} alt="" width={40} height={40} priority />
      <h1 className="font-semibold text-xl">Gecko</h1>
    </div>
  );
};
