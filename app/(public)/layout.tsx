import Navigator from "./navigator";
import Footer from "./footer";

export const metadata = {
  title: "Chess Champs",
  description: "Learn to play chess",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navigator />
      {children}
      <Footer />
    </main>
  );
}
