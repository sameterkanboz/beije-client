import CustomPacketTabs from "@/components/customPacketTabs/customPacketTabs";
import { MobilePacketForYou } from "@/components/mobilePacketForYou/mobilePacketForYou";
import PacketForYou from "@/components/packetForYou/packetForYou";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kendi Paketini Oluştur | beije.",
  description: "beije.co",
};
const Page = () => {
  return (
    <div className="flex flex-row gap-32 items-start justify-center">
      <div className="w-[516px] gap-12 flex flex-col justify-center ">
        <div className="flex flex-col  gap-6 ">
          <div className="flex flex-row justify-between items-center">
            <h6 className="text-[rgba(0,0,0,0.9)] font-semibold text-2xl leading-8 px-6 lg:px-0">
              Kendi Paketini Oluştur
            </h6>
            <Link className="hidden md:block" href={"/how"}>
              Nasıl Çalışır?
            </Link>
          </div>
          <p className="text-[rgba(0,0,0,0.6)] font-normal text-justify px-6 lg:px-0 leading-6">
            Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
            miktarlardan, sana özel bir paket oluşturalım.
          </p>
        </div>
        <CustomPacketTabs />
      </div>
      <>
        <PacketForYou />
        <MobilePacketForYou />
      </>
    </div>
  );
};

export default Page;
