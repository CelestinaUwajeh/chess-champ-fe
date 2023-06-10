import { WorksCardPropType } from ".";

import parent from "/public/parent-works.png";
import tutors from "/public/tutors-works.png";
import student from "/public/student-works.png";

export const parentsWorks: WorksCardPropType["data"] = {
  header:
    "Help your kids develop critical thinking and problem solving skills through playing chess.",
  todos: [
    "Sign Up for a parent account",
    "Choose your child's plan and make payment",
    "Ensure your child attends class at the scheduled time.",
    "Monitor your child's progress",
    "Do well to leave us a review",
  ],
  image: parent,
};
export const studentsWorks: WorksCardPropType["data"] = {
  header: "Unlock your innate abilities through chess",
  todos: [
    "Sign Up for a free account using parent email.",
    "Have access to free chess game",
    "Have access to live sessions when enrolled in a class",
    "Attend classes at the scheduled time.",
  ],
  image: student,
};
export const tutorsWorks: WorksCardPropType["data"] = {
  imageLoc: "right",
  header:
    "Join us in building a generation of strategic thinkers by teaching children how to play chess",
  todos: [
    "Submit your application",
    "You will be granted access to create your Chess Champs account after a successful interview.",
    "You are ready to start your tutoring journey on Chess Champs.",
  ],
  image: tutors,
};
