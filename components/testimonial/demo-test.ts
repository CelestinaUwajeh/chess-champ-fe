import ngozi from "/public/ngozi.png";
import amaka from "/public/amaka.png";
import { StaticImageData } from "next/image";

export interface TestimonyTypes {
  name: string;
  testimony: string;
  image: StaticImageData;
}

export const testimonies: TestimonyTypes[] = [
  {
    name: "Tobi Oluwaseun",
    testimony:
      "Since i have started my child on chess lessons with Chess Champs, I have noticed a remarkable improvement in my child's level of reasoning. I see the delibrate act of thinking before speaking",
    image: ngozi,
  },
  {
    name: "Thelma Brown",
    testimony:
      "My daughter's level of concentration has greatly improved since enrolling her into the Chess Champs programme",
    image: amaka,
  },
];
