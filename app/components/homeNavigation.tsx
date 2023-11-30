"use client";
import { HomeNavigationItemTypes, HomeNavigationTypes } from "@/types/types";
import { useRouter } from "next/navigation";
import { handleRouting } from "./handleNavigation";

const HomeNavigation: React.FC<HomeNavigationTypes> = ({ Navigation }) => {
  const router = useRouter();

  return (
    <ul className="flex items-center justify-center gap-4">
      {Navigation.map((item: HomeNavigationItemTypes) => (
        <li
          key={item.href}
          onClick={() => handleRouting(item.href, router, false)}
          className={`text-sm duration-500 text-zinc-500 hover:text-zinc-300 cursor-pointer`}
          style={{ viewTransitionName: item.name }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
export default HomeNavigation;
