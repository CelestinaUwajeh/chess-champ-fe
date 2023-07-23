import Navigator from "./navigator";
import Sidebar from "./sidebar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-bgPink">
      <Navigator />
      <div className="mx-3 lg:mx-0 flex h-full relative">
        <Sidebar />
        <div className="flex-1 ml-[254px]">
          <div className="max-w-[1200px] mx-auto w-full px-4 pt-[24px]">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
