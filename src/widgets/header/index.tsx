import { LogoOfHeader, Navbar } from "./ui";

const ChildrenOfHeader = () => {
  return (
    <>
      <LogoOfHeader />
      <Navbar />
    </>
  );
};

export const Header = () => {
  return (
    <header className="lg:px-12 py-4">
      <div className="lg:flex hidden flex-row items-center justify-center lg:justify-between">
        <ChildrenOfHeader />
      </div>

      <div className="lg:hidden flex flex-col items-center gap-y-4">
        <ChildrenOfHeader />
      </div>
    </header>
  );
};
