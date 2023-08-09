export interface PricingDto {
  name: string;
  description: string;
  price: string;
  perks: string[];
  link: string;
}

export const pricing: PricingDto[] = [
  {
    name: "Beginner",
    description:
      "Perfect for young individuals with little or no knowledge on how to play chess.",
    price: "15000",
    perks: [
      "15 interactive Sessions",
      "One-on-One Tutoring",
      "Supervised Practice Sessions",
      "Chess Study Resources",
    ],
    link: "/beginner",
  },
  {
    name: "Intermediate",
    description:
      "Students would be taught key concepts, tactics and forcing moves.",
    price: "25000",
    perks: [
      "20 interactive Sessions",
      "One-on-One Tutoring",
      "Supervised Practice Sessions",
      "Chess Study Resources",
      "Automatic Entry to Annual Tournament",
    ],
    link: "/intermediate",
  },
  {
    name: "Advanced",
    description:
      "Students would be taught how take complete control while playing chess with strategies like key openings, advanced tactics and endgame patterns.",
    price: "30000",
    perks: [
      "20 interactive Sessions",
      "One-on-One Tutoring",
      "Supervised Practice Sessions",
      "Chess Study Resources",
      "Automatic Entry to Annual Tournament",
      "10% discount on purchased chess items",
    ],
    link: "/advanced",
  },
];
