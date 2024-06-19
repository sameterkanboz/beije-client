"use client";

import { HEADER_ITEMS } from "@/config/header";
import { useOnClickOutside } from "@/hooks/useOnCllickOutside";
import { useEffect, useRef, useState } from "react";
import HeaderItem from "./headerItem";

const HeaderItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div className="flex gap-4 h-full">
      {HEADER_ITEMS.map((category, i) => {
        const handleOpen = () => {
          if (i < 3) {
            setActiveIndex(activeIndex === i ? null : i);
          } else {
            setActiveIndex(null);
          }
        };

        const close = () => setActiveIndex(null);

        const isOpen = i === activeIndex;

        return (
          <HeaderItem
            category={category}
            close={close}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default HeaderItems;
