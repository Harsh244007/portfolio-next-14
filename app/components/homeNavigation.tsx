"use client";
import { HomeNavigationItemTypes, HomeNavigationTypes } from "@/types/types";
import { memo } from "react";
import Link from "next/link";
import { navigation } from "@/util/JSON/profileData";

const HomeNavigation = () => {
 
  return (
    <nav>

    <ul className="flex items-center justify-center gap-4">
      {navigation.map((item: HomeNavigationItemTypes) => (
        <Link
        key={item.href}
          href={item.href}
          className={`text-md duration-500 text-zinc-400 hover:text-white cursor-pointer`}
        >
          <li>

            {item.name}
          </li>
        </Link>
      ))}
    </ul>
        </nav>
  );
};
export default memo(HomeNavigation);
