import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";

export const clashDisplay = localFont({
  src: [
    {
      path: "./ClashDisplay-Variable.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const digitalSeven = localFont({
  src: [
    {
      path: "./digital-7.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: "normal",
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});
