import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import BeijeLogo from "../icons/beijeLogo";
import { Icons } from "../icons/coreIcons";
const footerItems = [
  "beije Ped",
  "beije Günlük Ped",
  "beije Tampon",
  "beije Store",
  "Blog",
  "Sıkça Sorulan Sorular",
  "Biz Kimiz",
  "Quiz",
];
const Footer = () => {
  return (
    <footer
      className="mt-4 bg-[#262626] border-t dark:bg-gray-900"
      aria-labelledby="footer-heading"
    >
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-4">
            <BeijeLogo />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                fontSize: "1rem",
                lineHeight: "160%",
                letterSpacing: "-0.01em",
                color: "rgba(255, 255, 255, 0.698)",
              }}
            >
              Arayı açmayalım!
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "0.875rem",
                lineHeight: "1.375rem",
                color: "rgba(255, 255, 255, 0.698)",
              }}
            >
              beije’deki yeni ürün ve gelişmeleri sana haber verelim &amp; aylık
              e-gazetemiz döngü’ye abone ol!
            </Typography>
            <div className="flex flex-col lg:flex-row gap-4">
              <TextField
                size="small"
                id="outlined-basic"
                label="e-mail adresin"
                placeholder="halide.edip@adivar.com"
                variant="outlined"
                color="secondary"
                InputLabelProps={{
                  color: "secondary",
                }}
                inputProps={{
                  style: {
                    color: "grey",
                  },
                }}
                sx={{
                  backgroundColor: "transparent",
                  borderRadius: "32px",

                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#E3E3E3",
                      borderWidth: 1,
                    },
                    "&:hover fieldset": {
                      borderColor: "#E3E3E3",
                      borderWidth: 1,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#E3E3E3",
                      borderWidth: 1,
                    },
                  },
                }}
              />
              <Button
                sx={{
                  borderRadius: "32px",
                  backgroundColor: "#E3E3E3",
                  textTransform: "capitalize",
                  color: "#262626",
                  fontWeight: 600,
                  fontSize: "1rem",
                  letterSpacing: "-0.0375em",
                }}
                variant="contained"
              >
                Gönder
              </Button>
            </div>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                fontSize: "0.75rem",
                lineHeight: "20px",
                opacity: 0.698,
                letterSpacing: "-0.03em",
                color: "rgba(255, 255, 255, 0.698)",
              }}
            >
              Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve
              beije'den haber almayı onaylıyorum.
            </Typography>
          </div>
          <div className="flex flex-row justify-center xs:w-full lg:w-auto">
            <div className="flex flex-col w-1/2 justify-between">
              {footerItems.slice(0, 4).map((item) => (
                <Link
                  className="text-center font-thin text-sm text-[#BDBDBD] "
                  href={item}
                  key={item}
                >
                  <span className="hover:text-[#E3E3E3] transition-colors duration-300 ease-in-out">
                    {item}
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex flex-col w-1/2 justify-between">
              {footerItems.slice(4).map((item) => (
                <Link
                  className="text-center font-thin text-sm text-[#BDBDBD] "
                  href={item}
                  key={item}
                >
                  <span className="hover:text-[#E3E3E3] transition-colors duration-300 ease-in-out">
                    {item}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-row xs:w-full md:w-auto justify-between items-start lg:flex-col gap-4">
            {[
              {
                title: "facebook",
                icon: <Icons.facebook />,
              },
              {
                title: "instagram",
                icon: <Icons.instagram />,
              },
              {
                title: "twitter",
                icon: <Icons.twitter />,
              },
              {
                title: "linkedin",
                icon: <Icons.linkedin />,
              },
              {
                title: "spotify",
                icon: <Icons.spotify />,
              },
            ].map((item) => (
              <Link
                className="text-base font-normal text-[#BDBDBD] "
                href={item.title}
                key={item.title}
              >
                <div className="flex flex-row justify-center gap-3 items-center">
                  {item.icon}

                  <span className="hidden lg:block">
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                      }}
                    >
                      {item.title}
                    </Typography>{" "}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-8 mt-8 text-[#929292] border-[#929292] border-t-2 flex flex-col gap-4 lg:flex-row justify-center items-center ">
          <div className="flex space-x-6 md:order-2">KVKK</div>
          <div className="flex space-x-6 md:order-2">KVKK Başvuru Formu</div>
          <div className="flex space-x-6 md:order-2">Üyelik Sözleşmesi</div>
          <div className="flex space-x-6 md:order-2">Gizlilik Politikası</div>
          <div className="flex space-x-6 md:order-2">Çerez Politikası</div>
          <div className="flex space-x-6 md:order-2">Test Sonuçları</div>
          <div className="flex space-x-2 md:order-2">
            <Link href={"/"}>EN</Link>
            <span>|</span>
            <Link href={"/"}>TR</Link>
          </div>

          <p className="mt-8 text-base dark:text-[#AEC1CC] text-[#929292] md:mt-0 md:order-1 max-w-6 lg:max-w-full">
            2024 beije. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
