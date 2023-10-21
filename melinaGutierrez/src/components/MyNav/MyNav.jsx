import React from "react";
import logoEquipo from "../../assets/logos/logoEquipo.svg";
import logoSuela from "../../assets/logos/LogoSuelaNav.svg";
import instaScratch from "../../assets/logos/instagramScratch.png";

export default function MyNav() {
  return (
    <div className="absolute w-full flex flex-col items-center gap-3 p-2 z-50 ">
      <div className="fixed z-50 w-11/12 flex justify-center items-center gap-5 bg-[#8fa1d7]/80 py-2 px-4 rounded-lg h-10 md:h-14 md:text-lg text-[10px]">
        <button className="hover:bg-gray-800 h-full rounded-lg px-1">
          <a href="#bio">BIOGRAFÍA</a>
        </button>
        <button className="hover:bg-gray-800 h-full rounded-lg px-1">
          <a href="#video">VIDEO</a>
        </button>
        <button className="hover:bg-gray-800 h-full rounded-lg px-1">
          <a href="#images">FOTOGRAFÍAS</a>
        </button>
        <button className="hover:bg-gray-800 h-full rounded-lg px-1">
          <a href="#suela">SUELA PRODUCCIONES</a>
        </button>
      </div>

      <div className=" w-full flex justify-between items-center px-5 md:px-10 mt-12 md:mt-16  h-16 md:h-24 bg-white rounded-lg ">
        <div className="w-1/3">
          <a href="https://www.instagram.com/suelaproducciones" target="_blank" rel="noopener noreferrer">

          <img src={logoSuela} alt="" className="w-10 md:w-16" />
          </a>
        </div>
        <div className="w-1/3 flex justify-center">
          {" "}
          <img src={logoEquipo} alt="" className="w-10 md:w-16" />
        </div>
        <div className="w-1/3 flex justify-end items-center gap-1">
          <a href="https://www.instagram.com/me_gutierrez10" target="_blank">
            <button className="text-black flex flex-col items-center">
              <img
                src={instaScratch}
                alt=""
                className="w-8 h-8 md:w-14 md:h-14 object-cover"
              />

              <span className="text-[0.6em] md:text-sm">@me_gutierrez10_</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
