import CustomPacketTabs from "@/components/customPacketTabs/customPacketTabs";
import PacketForYou from "@/components/packetForYou/packetForYou";
import { Typography } from "@mui/material";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kendi Paketini Oluştur | beije.",
  description: "beije.co",
};
const Page = () => {
  return (
    <div className="flex flex-row gap-32 items-start justify-center">
      <div className="w-[516px] gap-24 flex flex-col">
        <div>
          <div className="flex flex-row justify-between items-center">
            <Typography
              sx={{ fontWeight: 600, fontSize: "1.75rem", lineHeight: "130%" }}
            >
              Kendi Paketini Oluştur
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: "120%",
                letterSpacing: "-0.03em",
                fontStyle: "normal",
                color: "rgba(52,49,49))",
              }}
            >
              <Link href={"#"}>Nasıl Çalışır?</Link>
            </Typography>
          </div>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: "1.625rem",
              letterSpacing: "-0.01em",
              color: "rgba(0, 0, 0, 0.6)",
            }}
          >
            Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
            miktarlardan, sana özel bir paket oluşturalım.
          </Typography>
        </div>
        <CustomPacketTabs />
      </div>
      <>
        <PacketForYou />
      </>
    </div>
  );
};

export default Page;
