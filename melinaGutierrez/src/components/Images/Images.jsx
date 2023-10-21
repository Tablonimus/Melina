import { Carousel } from "flowbite-react";
import React from "react";
import dv1 from "../../assets/carousel/dv1.jpg";
import dv2 from "../../assets/carousel/dv2.jpg";
import dv3 from "../../assets/carousel/dv3.jpg";
import dv4 from "../../assets/carousel/dv4.jpg";

export default function Images() {
  return (
    <scroll-page id="images">
      <div className="p-2">
        <span className="font-bold">FOTOGRAFÍAS</span>
      </div>
      <div className="h-96 md:h-[50em] card-container p-2 rounded-lg">
        <Carousel indicators={true} >
          <img
            src={dv1}
            alt=""
            className=" object-contain w-96 h-96 md:h-full md:w-full rounded-2xl"
          />
          <img
            src={dv2}
            alt=""
            className=" object-contain w-96 h-96 w-96 h-96 md:h-full md:w-full rounded-2xl"
          />
          <img
            src={dv3}
            alt=""
            className=" object-contain w-96 h-96 md:h-full md:w-full rounded-2xl"
          />
          <img
            src={dv4}
            alt=""
            className=" object-contain w-96 h-96 md:h-full md:w-full rounded-2xl"
          />
       
        </Carousel>
      </div>
    </scroll-page>
  );
}
