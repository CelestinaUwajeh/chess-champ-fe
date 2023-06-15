import Navigator from "../(public)/navigator";
import LayoutImg from "./layout-img";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-[calc(100vh-56px)] lg:min-h-screen bg-bgPink">
      <Navigator />
      {children}
      <LayoutImg />
    </main>
  );
}
