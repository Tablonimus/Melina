import React from "react";

export default function Video() {
  return (
    <scroll-page id="video">
      <div className="p-2">
        <span className="font-bold">VIDEO</span>
      </div>
      <div className="flex justify-center h-96 lg:h-[50em] card-container rounded-lg p-1 md:py-5 md:px-5">
        <iframe
          className="rounded-lg w-full h-full p-2"
          src="https://www.youtube.com/embed/dOSPp0amx5U?si=VcjL0YjUmZN4A7X2" 
          title="Melina Gutierrez"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </scroll-page>
  );
}
