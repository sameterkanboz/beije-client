"use client";
import { HEADER_ITEMS } from "@/config/header";
import { cn } from "@/lib/utils";
import Link from "next/link";
import HeaderItemCard from "./headerItemCard";

type Category = (typeof HEADER_ITEMS)[number];

interface HeaderItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
  close: () => void;
  href: string;
}

const HeaderItem = ({
  isAnyOpen,
  category,
  handleOpen,
  isOpen,
  close,
  href,
}: HeaderItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Link
          href={href}
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
        </Link>
      </div>
      {isOpen ? (
        <div
          onClick={() => close()}
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground shadow-xl pb-16",
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
            <div className="flex flex-row justify-center">
              <div className="max-w-7xl px-8 flex flex-col justify-center gap-12 items-center">
                {" "}
                <div className="self-start flex flex-col gap-3">
                  <span className="font-medium text-2xl">{category.label}</span>
                  <div className="flex flex-row flex-wrap gap-4">
                    {category.featured &&
                      category.featured.map((item) => (
                        <HeaderItemCard
                          key={item.name}
                          title={item.name}
                          icon={item.imageSrc}
                        />
                      ))}
                  </div>
                </div>
                {category.label === "Ürünler" && (
                  <div className="self-start flex flex-col gap-3">
                    <div className="flex flex-row justify-between">
                      <span className="font-medium text-2xl">Paketler</span>
                      <span>Tüm Paketler</span>
                    </div>

                    <div className="flex flex-row flex-wrap gap-4">
                      {category.packages &&
                        category.packages.map((item) => (
                          <HeaderItemCard
                            key={item.name}
                            title={item.name}
                            icon={item.imageSrc}
                          />
                        ))}
                    </div>
                  </div>
                )}
              </div>
              {category.label === "Ürünler" && (
                <div className="self-center">
                  {" "}
                  <div className="h-full self-start">
                    <HeaderItemCard
                      title="Kendi Paketini Oluştur"
                      icon="/images/custom-packet.webp"
                      isVertical
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HeaderItem;
