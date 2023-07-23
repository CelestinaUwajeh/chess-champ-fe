import Image from "next/image";

import profileusers from "/public/profile-users.svg";
import HighlightCard from "./highlight";

const Attendance = () => {
  return (
    <HighlightCard about="Attendance" score="7/10">
      <Image src={profileusers} alt="Attendance-icon" />
    </HighlightCard>
  );
};

export default Attendance;
