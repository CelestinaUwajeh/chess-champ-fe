import comp from "/public/comp.svg";
import medal from "/public/medal.svg";
import tech from "/public/tech.svg";
import comm from "/public/comm.svg";
import { ListCarPropType } from "@/components/list-card";

export const whyItWorks: ListCarPropType["data"]["items"] = [
  {
    listType: comp,
    header: "One-on-One Virtual Sessions",
    text: "Students have access to personalized training sessions with experienced chess tutors coupled with the opporturnity of asking questions and getting answers in real time.",
  },
  {
    listType: tech,
    header: "Technology",
    text: "Students are able to leverage on the power of technology to access virtual lessons, review class videos and practise right from the comfort of their homes.",
  },
  {
    listType: comm,
    header: "Community",
    text: "We are building a community where students can interact with one another over agame of chess from the comfort of their homes.",
  },
  {
    listType: medal,
    header: "Tournament",
    text: "Students have the opportunity to showcase their knowledgeat the chess champs tournament.",
  },
];
