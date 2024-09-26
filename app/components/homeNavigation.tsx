"use client";
import { HomeNavigationItemTypes } from "@/types/types";
import { memo } from "react";
import Link from "next/link";
import { navigation } from "@/util/JSON/profileData";
import StaggeredText from "./Common/StaggeredText";
import LinkTransition from "@/app/components/Common/ViewLink"

const HomeNavigation = () => {

  return (
    <nav>

      <ul className="flex items-center justify-center gap-4 ">
        {navigation.map((item: HomeNavigationItemTypes) => (
          <LinkTransition
            key={item.href}
            href={item.href}
            tabIndex={0}
            style={{ viewTransitionName: item.view }}

            className={`text-md  duration-500 group/headerZoop text-zinc-400 hover:text-white cursor-pointer`}
          >
            <li>
            <StaggeredText className="" focus={false} hoverGroup={false} str={item.name}>


              </StaggeredText>
            </li>
          </LinkTransition>
        ))}
      </ul>
    </nav>
  );
};
export default memo(HomeNavigation);
