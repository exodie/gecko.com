import { LogoOfHeader, Navbar } from "./ui";

export const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between px-12 py-4">
      <LogoOfHeader />

      <Navbar />
    </header>
  );
};
