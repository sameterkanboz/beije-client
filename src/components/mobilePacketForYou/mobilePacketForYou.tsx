"use client";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useCart } from "@/context/sumContext";
import { Button } from "@mui/material";
import { ChevronDown } from "lucide-react";
import PeriodIcon from "../icons/periodIcon";
import TabCard from "../packetForYou/tabCard";

export function MobilePacketForYou() {
  const { order } = useCart();

  return (
    <Drawer>
      <DrawerTrigger
        asChild
        className="fixed lg:hidden "
        disabled={!order?.sum}
      >
        <div className="fixed flex flex-col bottom-0 left-0 right-0 w-full p-4 gap-4 bg-[#f8f8f8] shadow-md text-black text-center z-50">
          {order?.sum && order.sum > 0 ? (
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-2">
                <span className="font-medium text-lg tracking-tighter">
                  Toplam
                </span>
                <ChevronDown size={24} className="inline-block" />
              </div>
              <div className="font-medium text-lg tracking-tighter opacity-50 ">
                ₺{order?.sum.toFixed(2)}
              </div>
            </div>
          ) : null}

          <Button
            variant="contained"
            disabled={!order?.sum}
            sx={{
              borderRadius: "16px",
              width: "100%",
              textTransform: "capitalize",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            {order ? `Sepete Ekle (₺${order?.sum.toFixed(2)})` : "Sepete Ekle"}
          </Button>
        </div>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <div className="flex flex-row items-center p-3 shadow-md gap-4 rounded-lg w-full">
            <PeriodIcon /> 2 ayda 1 gönderim
          </div>
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
            </div>
          ) : (
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
              Sepete Ekle (₺0,00)
            </Button>
          )}
        </div>
        <DrawerFooter>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-2">
              <span className="font-medium text-lg tracking-tighter">
                Toplam
              </span>
              <ChevronDown size={24} className="inline-block" />
            </div>
            <div className="font-medium text-lg tracking-tighter opacity-50 ">
              ₺{order?.sum.toFixed(2)}
            </div>
          </div>

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
            {order ? `Sepete Ekle (₺${order?.sum.toFixed(2)})` : "Sepete Ekle"}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
