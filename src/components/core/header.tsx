import { MenuIcon } from "lucide-react";
import Link from "next/link";
import BeijeLogo from "../icons/beijeLogo";
import CartLogo from "../icons/cartLogo";
import UserLogo from "../icons/userLogo";
import HeaderItems from "./header/headerItems";

const Header = () => {
  return (
    <header className="fixed w-full z-50">
      <nav className="flex items-center justify-between lg:justify-around p-6 bg-[#F5F5F5] ">
        <Link href={"/"}>
          <BeijeLogo />
        </Link>
        <div className=" space-x-8 hidden lg:block ">
          <HeaderItems />
        </div>
        <div className="flex space-x-4">
          <Link href={"/login"}>
            <CartLogo />
          </Link>
          <Link href={"/signup"}>
            <UserLogo />
          </Link>
          <div className="flex relative lg:hidden cursor-pointer">
            <div className="animate-blinkingBg -top-[12px] -left-[8px] absolute w-3 h-3 rounded-full" />
            <MenuIcon />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
