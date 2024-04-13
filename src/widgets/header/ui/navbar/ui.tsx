import Link from "next/link";

import { NAVIGATION } from "@/shared/configs";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-row items-center gap-x-5">
        {NAVIGATION.map(({ key, label, href }) => (
          <li key={key} className="text-xl font-normal">
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
