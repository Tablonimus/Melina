import React from "react";
import canchaTermica from "../../assets/images/canchaTermica.png";
import meliVeni from "../../assets/player/meliVeni.png";
import logoNombre from "../../assets/logos/logoNombre.png";
import arg from "../../assets/logos/banderaArgentina.png";
import "./bioStyles.css";
export default function Bio() {
  return (
    <scroll-page id="bio">
      <div className="p-2">
        <span className="font-bold">BIOGRAFÍA</span>
      </div>
      <div className=" flex flex-col md:items-center card-container text-white rounded-lg p-2 md:p-6">
        <div className=" flex  w-full drop-shadow-2xl justify-end items-center md:justify-center">
          <div className="flex flex-col items-center px-3 ">
            <img
              src={meliVeni}
              alt=""
              className=" absolute  drop-shadow-2xl object-cover w-44  left-5 md:left-[17em] md:w-[15em]"
            />
            <div className="flex flex-col items-center py-14 md:ml-36">
              <span>POSICIÓN</span>
              <img
                src={canchaTermica}
                alt=""
                className="drop-shadow-2xl object-contain w-52 md:w-[20em]"
              />
              <span className="mt-2 md:mt-4">PUESTO: POSTE</span>
            </div>
          </div>
        </div>

        <div className="flex justify-around md:justify-center md:gap-14 w-full items-center">
          <section className="flex flex-col gap-2 items-center">
            <span className="text-[0.9em] md:text-lg font-semibold">
              NACIMIENTO
            </span>
            <span className="info text-[0.9em] md:text-lg text-white font-semibold">
              20/12/1990
            </span>
          </section>
          <section className="flex flex-col gap-2 items-center">
            <span className="text-[0.9em] md:text-lg font-semibold">PAIS</span>
            <span className="info text-[0.9em] md:text-lg text-white font-semibold">
              ARGENTINA
            </span>
          </section>
          <section className="flex flex-col gap-2 items-center">
            <span className="text-[0.9em] md:text-lg font-semibold">DEBUT</span>
            <span className="info text-[0.9em] md:text-lg text-white font-semibold">
              2004
            </span>
          </section>
          <section className="flex flex-col gap-2 items-center">
            <span className="text-[0.9em] md:text-lg font-semibold">
              PIERNA HÁBIL
            </span>
            <span className="info text-[0.9em] md:text-lg text-white font-semibold">
              Izquierda
            </span>
          </section>
        </div>

        <div className=" mt-5 flex justify-center items-center">
          <img
            src={logoNombre}
            alt=""
            className="drop-shadow-2xl object-cover w-32 md:w-44"
          />
        </div>
      </div>
    </scroll-page>
  );
}
