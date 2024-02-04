"use client";
import { useEffect } from 'react';
const BodyScroll = () => {
  useEffect(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = "hidden";
  }
    return ()=> document.body.style.overflow = "auto";
}, []);
    return null
};
export default BodyScroll;
