import NotFoundIcon from "@/components/icons/notFoundIcon";
import { Button, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | beije.",
  description: "beije.co",
};

const Page = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-12 pt-12">
      <div className="flex flex-col gap-12">
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "2.5rem",
            lineHeight: "120%",
            color: "rgba(0,0,0,0.38)",
          }}
        >
          404
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "2.5rem",
            lineHeight: "120%",
          }}
        >
          Aradığın sayfa bulunamadı.
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "1.625rem",
            letterSpacing: "-0.01em",
            color: "rgba(0,0,0,0.6)",
            userSelect: "none",
          }}
        >
          Sorunun ne olduğunu en kısa sürede bukup çözmek için elimizden geleni
          yapacağız!
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: "16px",
            width: "150px",
            textTransform: "capitalize",
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
          href="/"
        >
          Ana Sayfaya Dön
        </Button>
      </div>
      <div>
        <NotFoundIcon className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]" />
      </div>
    </div>
  );
};

export default Page;
