import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import MenuIcon from "../icons/menuIcon";

const MenuItems = [
  {
    title: "Ürünler",
    href: "/products",
    arrow: true,
  },
  {
    title: "Biz Kimiz?",
    href: "/about",
    arrow: true,
  },
  {
    title: "Bağış Kültürü",
    href: "/contact",
    arrow: true,
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Reg Testi!",
    href: "/contact",
  },
  {
    title: "Kendi Paketini Oluştur",
    href: "/custom-packet",
  },
];

export function MobileDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MenuIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-screen bg-[rgba(247,246,245,1)] ">
        <DropdownMenuGroup className="flex flex-col gap-4 p-6">
          {MenuItems.map((item, index) => (
            <Link
              key={item.title}
              className="text-lg font-thin"
              href={item.href}
            >
              <DropdownMenuItem
                className="flex flex-row justify-between relative"
                key={index}
              >
                {index === 0 && (
                  <div className="animate-blinkingBg top-[6px] -left-5  absolute w-3 h-3 rounded-full" />
                )}

                {item.title}

                {item.arrow && <ChevronRight className="w-6 h-6 text-[#000]" />}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
