import React, { useEffect, useRef, ReactNode, useCallback } from "react";

interface Props {
  offset?: string;
  children?: ReactNode;
}

const SlideUp: React.FC<Props> = ({ children, offset = "0px" }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          // entry.target.classList.add("animate-slideUpCubiBezier");
        }
      });
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: offset,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [offset, handleIntersection]);

  return (
    <div ref={ref} className="relative opacity-1">
      {children}
    </div>
  );
};

export default SlideUp;
