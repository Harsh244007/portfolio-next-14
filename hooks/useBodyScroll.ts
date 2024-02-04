"use client";
import { useEffect } from 'react';
const BodyScroll = () => {
  useEffect(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflowY = "hidden";
  }
    return ()=> document.body.style.overflowY = "auto";
}, []);
    return null
};
export default BodyScroll;
