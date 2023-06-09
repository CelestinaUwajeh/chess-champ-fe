import Hero from "@/components/hero";

const Works = () => {
  return (
    <main>
      <Hero
        data={{
          image: "bg-works-bg",
          header: "How it Works",
          description: "Welcome to Chess Champs! Here is how it works.",
          link: { href: "/sign-up", text: "Sign Up" },
        }}
      />
    </main>
  );
};

export default Works;
