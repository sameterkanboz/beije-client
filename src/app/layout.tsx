import Footer from "@/components/core/footer";
import Header from "@/components/core/header";
import { CartProvider } from "@/context/sumContext";
import ThemeRegistry from "@/lib/themeRegistry";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "beije.",
  description: "beije.co",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={"bg-[#F9F5F2]"}>
        <ThemeRegistry options={{ key: "mui-theme" }}>
          <AppRouterCacheProvider>
            <CartProvider>
              <Header />
              <main className="flex  flex-col px-2  py-24 md:px-12">
                {children}
              </main>

              <Footer />
            </CartProvider>
          </AppRouterCacheProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
