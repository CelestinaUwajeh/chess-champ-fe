import Back from "./back";
import TopDisplay from "./top-display";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-bgPink">
      <Back />
      <TopDisplay />
      {children}
    </section>
  );
}
