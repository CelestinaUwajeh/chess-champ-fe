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
      <div className="mx-3 lg:mx-0">{children}</div>
      <LayoutImg />
    </main>
  );
}
