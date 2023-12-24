"use client";
import { ExtendedWindow } from "@/types/types";
import React, { memo, useCallback, useEffect, useState } from "react";
let scrolled = false;
const useIinfiniteScroll = (itemsPerView: number, totalLength: number): [number, number] => {
  const startItems = 0;
  const [endItems, setEndItems] = useState(itemsPerView);
  useEffect(() => {
    const windowObj = window as ExtendedWindow;
    const Watcher = () => {
      if (!scrolled) scrolled = true;
      const currentWindowHeight = window.innerHeight;
      const totalHeight = document.documentElement.offsetHeight;
      const scrolledPx = window.scrollY;
      const offSet = 200;
      const distanceToBottom = totalHeight - (scrolledPx + currentWindowHeight);
      if (distanceToBottom > offSet) {
        setEndItems((prev) => prev + itemsPerView);
      } else {
        setEndItems(totalLength);
      }
    };
    if (!scrolled) Watcher();
    windowObj.addEventListener("scroll", Watcher);
    return () => windowObj.removeEventListener("scroll", Watcher);
  }, []);
  return [startItems, endItems];
};
export default useIinfiniteScroll;
