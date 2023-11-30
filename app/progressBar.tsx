"use client";
import { memo, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

const ProgressBar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
    }, 500);
  }, [pathname, searchParams]);
  return null;
};
export default memo(ProgressBar);
