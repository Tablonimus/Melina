import React from "react";
import meliEspalda from "../../assets/player/meliEspalda.png";
import meliFrente from "../../assets/player/meliFrente.png";
import Bio from "../../components/Bio/Bio";
import Video from "../../components/Video/Video";
import Images from "../../components/Images/Images";
import textoNombre from "../../assets/images/textoNombre.png";
import Honors from "../../components/Honors/Honors";
import AboutUs from "../../components/AboutUs/AboutUs";
import "./homeStyles.css";


export default function Home() {
  return (
    <div className="background-fix">
      {/*PORTADA PRINCIPAL */}
      <div className="path pt-32 md:pt-44 lg:px-24 h-screen relative main-container">
        <div className=" flex flex-col">
          <div className="relative">
            <img
              src={textoNombre}
              alt=""
              className="sticky ml-4 mt-4 w-2/3 md:w-7/12"
            />
          </div>
          <div className=" flex justify-center px-5 py-10">
            <img
              src={meliFrente}
              alt=""
              className="fade-in z-20 absolute bottom-[-2em] right-36 md:right-[30em] w-72 lg:w-[25em] drop-shadow-2xl"
            />
            <></>
            <img
              src={meliEspalda}
              alt=""
              className="fade-in-espalda absolute bottom-[-7.5em] md:bottom-[-10.5em] right-[-0.1em] md:right-[2em] z-10  object-contain w-[40em] h-[40-em] lg:w-[50em] lg:h-[60em] "
            />
          </div>
        </div>
      </div>
      {/* ---SECCIONES-------- */}
      <scroll-container>
        <div className="flex flex-col bg-[#ff00ff]/30 px-4 pb-14 lg:px-96 gap-5 z-40">
          <Bio />
          <Honors />
          <Video />
          <Images />
          <AboutUs />
        </div>
      </scroll-container>
    </div>
  );
}
