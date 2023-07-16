import Navigator from "./navigator";
import Sidebar from "./sidebar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen bg-bgPink">
      <Navigator />
      <Sidebar />
      <div className="mx-3 lg:mx-0">{children}</div>
    </main>
  );
}
