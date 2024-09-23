import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Wild Oasis",
    default: "Wild Oasis",
  },
  description: "The best resort in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className}   bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <main className="flex-1 px-8 py-12 grid">
          <div className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
