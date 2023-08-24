"use client";

import { useState } from "react";

import ProfileCard from "../../parent/child/[id]/profile/profile-card";
import { Rating as ReactRating, ThinRoundedStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Rating = () => {
  const [rating, setRating] = useState(3.0);

  const iconStyles = {
    itemShapes: ThinRoundedStar,
    activeFillColor: "#930000",
    inactiveFillColor: "rgba(1,1,1,0.5)",
  };

  return (
    <ProfileCard title={`Rating: ${rating}`}>
      <ReactRating
        style={{ width: "100%" }}
        value={rating}
        onChange={setRating}
        itemStyles={iconStyles}
      />
    </ProfileCard>
  );
};

export default Rating;
