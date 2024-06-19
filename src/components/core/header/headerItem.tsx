"use client";
import { HEADER_ITEMS } from "@/config/header";
import { cn } from "@/lib/utils";

type Category = (typeof HEADER_ITEMS)[number];

interface HeaderItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
  close: () => void;
}

const HeaderItem = ({
  isAnyOpen,
  category,
  handleOpen,
  isOpen,
  close,
}: HeaderItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <button
          className={cn("border-b-[1px] border-transparent", {
            "border-black": isOpen,
          })}
          onMouseEnter={handleOpen}
          onMouseLeave={handleOpen}
        >
          {category.label === "Ürünler" && (
            <div className="animate-blinkingBg -top-[12px] -left-[8px] absolute w-3 h-3 rounded-full" />
          )}
          <span className="select-none font-thin capitalize text-lg">
            {category.label}
          </span>
        </button>
      </div>
      {isOpen ? (
        <div
          onClick={() => close()}
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground shadow-xl",
            {
              "animate-in fade-in-10 slide-in-from-top-10": !isAnyOpen,
            }
          )}
        >
          <div
            className="absolute inset-0 top-1/2 bg-[#F5F5F5] shadow"
            aria-hidden="true"
          />
          <div className="relative bg-[#F5F5F5]">
            <div className="mx-auto max-w-7xl px-8">
              {category.label}
              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                  {category.featured.map((item) => (
                    <div onClick={() => close()} key={item.name}>
                      <div>{item.name}</div>
                    </div>
                  ))}
                </div>
                <div>
                  {category.packages &&
                    category.packages.map((item) => (
                      <div onClick={() => close()} key={item.name}>
                        <div>{item.name}</div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HeaderItem;
