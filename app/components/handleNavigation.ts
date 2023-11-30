"use client";
import { ExtendedDocument, ExtendedWindow } from "@/types/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
export const handleRouting = (url: string, router: AppRouterInstance, isBack: boolean) => {
  if (!isBack) isBack = false;
  if (url.includes("https")) {
    const windowObject = window as ExtendedWindow;
    return typeof windowObject != undefined ? windowObject.open(url, "_blank") : null;
  } else {
  }
  const viewTransition = typeof document != undefined ? (document as ExtendedDocument) : null;
  if (!viewTransition?.startViewTransition) {
    return isBack ? router.back() : router.push(url);
  }
  viewTransition.startViewTransition(() => {
    console.info("statring Transitions to ", url);
    return isBack ? router.back() : router.push(url);
  });
};
