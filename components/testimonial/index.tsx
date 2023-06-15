"use client";

import Slider from "react-slick";
import { useMediaQuery } from "usehooks-ts";

import { TestimonyTypes } from "./demo-test";
import TestimonialCard from "./testimonial-card";

interface PropType {
  data: TestimonyTypes[];
}
const Testimonials = ({ data }: PropType) => {
  const matches = useMediaQuery("(min-width: 768px)");
  const settings = {
    customPaging: function (i: number) {
      return (
        <span>
          <div className="w-5 h-5 bg-lightGrey rounded-full"></div>
        </span>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: matches ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    dotsClass: "slick-dots slick-thumb",
    className: "slick-div",
  };

  return (
    <div className="mt-12 mb-12">
      <Slider {...settings} className="">
        {data.map((testimony) => (
          <TestimonialCard key={testimony.name} data={testimony} />
        ))}
        {data.map((testimony) => (
          <TestimonialCard key={testimony.name} data={testimony} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
