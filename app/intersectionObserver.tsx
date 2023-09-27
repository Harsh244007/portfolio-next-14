"use client";
import React, { useEffect } from "react";

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

function observerCallback(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.replace("fadeOut", "fadeIn");
    } else {
      entry.target.classList.replace("fadeIn", "fadeOut");
    }
  });
}

const IntersectionObserverComponent = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const fadeElms = document.querySelectorAll(".fade");
    fadeElms.forEach((el) => observer.observe(el));
    return () => {
      fadeElms.forEach((el) => observer.unobserve(el));
    };
  });
};

export default IntersectionObserverComponent;
