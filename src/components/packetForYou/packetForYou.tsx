"use client";
import { useCart } from "@/context/sumContext";
import { Button } from "@mui/material";
import Image from "next/image";
import PeriodIcon from "../icons/periodIcon";
import TabCard from "./tabCard";
const PacketForYou = () => {
  const { order } = useCart();

  return (
    <>
      <div className=" h-full  flex-col p-8 gap-6 w-[466px] bg-[#fff] rounded-[16px] hidden md:flex">
        <h1 className=" font-normal text-2xl leading-[130%]">Özel Paketin</h1>
        <div className="flex flex-row items-center p-3 shadow-md gap-4 rounded-lg w-full">
          <PeriodIcon /> 2 ayda 1 gönderim
        </div>
        <Image
          src="/images/packet.webp"
          alt="packetForYou"
          width={466}
          height={466}
        />
        {order ? (
          <div>
            {order.categories.map((category) => (
              <div key={category.categoryId}>
                <TabCard
                  categoryId={category.categoryId}
                  header={category.categoryName}
                  description={category.categoryName}
                  products={category.products}
                  buttonText="Paketten Çıkar"
                />
              </div>
            ))}

            <Button
              variant="contained"
              sx={{
                borderRadius: "16px",
                width: "100%",
                textTransform: "capitalize",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Sepete Ekle (₺{order.sum.toFixed(2)})
            </Button>
          </div>
        ) : (
          <Button
            disabled={true}
            variant="contained"
            sx={{ borderRadius: "16px" }}
          >
            Sepete Ekle (₺0,00)
          </Button>
        )}
      </div>
    </>
  );
};

export default PacketForYou;
