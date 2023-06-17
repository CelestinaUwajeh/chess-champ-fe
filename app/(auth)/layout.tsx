import Navigator from "../(public)/navigator";
import LayoutImg from "./layout-img";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-bgPink">
      <Navigator />
      {children}
      <LayoutImg />
    </main>
  );
}
