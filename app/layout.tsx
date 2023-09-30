import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactProvider from "@/redux/provider";

export const metadata = {
  title: "Chess Champs",
  description: "Learn to play chess",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactProvider>{children}</ReactProvider>
      </body>
    </html>
  );
}
