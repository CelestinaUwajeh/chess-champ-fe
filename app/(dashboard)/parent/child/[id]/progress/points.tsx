import Image from "next/image";

import profilestar from "/public/profile-star.svg";
import HighlightCard from "./highlight";

const Points = () => {
  return (
    <HighlightCard about="Points" score="200">
      <Image src={profilestar} alt="Highlight" />
    </HighlightCard>
  );
};

export default Points;
