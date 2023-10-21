import React from "react";
import cafs from "../../assets/logos/logo-CAFS.png";
import meliBio from "../../assets/player/meliBio.png";
import "./honorsStyles.css";

export default function Honors() {
  return (
    <div>
      <div className="p-2">
        <span className="font-bold ">PALMARÉS</span>
      </div>
      <div className="text-white card-container  rounded-lg p-2 md:p-4 flex flex-col md:items-center md:justify-center">
        <div className="flex flex-col gap-2 rounded-lg">
          {/* LISTA */}
          <div className=" flex flex-col items-center rounded-lg p-2 ">
            <div className=" relative flex w-full md:gap-5">
              <section className="flex flex-col  gap-2">
                {/* TORNEOS NACIONALES */}
                <div className="flex flex-col justify-start gap-2">
                  <span className="info text-sm  md:text-lg  font-semibold">
                    Torneos Nacionales{" "}
                  </span>{" "}
                  <div className="">
                    <div>
                      🏆
                      <span className="text-[0.6em] md:text-lg ">
                        Copa Nacional Puerto Madryn 2022
                      </span>
                    </div>
                  </div>
                </div>
                {/* SUELA CARAMELO */}
                <div className="flex flex-col gap-2">
                  <span className="info text-sm  md:text-lg  font-semibold">
                    Suela Caramelo
                  </span>{" "}
                  <div className="">
                    <div>
                      🏆
                      <span className="text-[0.6em] md:text-lg ">
                        Campeónas patagónicas Esquel 2021
                      </span>
                    </div>
                    <div>
                      🏆
                      <span className="text-[0.6em] md:text-lg ">
                        Copa Challenger de Comodoro 2023
                      </span>
                    </div>
                  </div>
                </div>
                {/* TORNEOS LOCALES */}
                <div className="flex flex-col gap-2">
                  <span className="info text-sm  md:text-lg  font-semibold">
                    Torneos Locales
                  </span>{" "}
                  <div className="">
                    <div>
                      🏆
                      <span className="text-[0.6em] md:text-lg ">
                        Clausura 2018
                      </span>
                    </div>
                    <div>
                      🏆
                      <span className="text-[0.6em] md:text-lg ">
                        Apertura 2019
                      </span>
                    </div>
                    <div>
                      🏆
                      <span className="text-[0.6em] md:text-lg ">
                        Apertura 2022
                      </span>
                    </div>
                    <div>
                      🏆
                      <span className="text-[0.6em] md:text-lg ">
                        Clausura 2022
                      </span>
                    </div>
                    <div>
                      🏆
                      <span className="text-[0.6em] md:text-lg ">
                        Apertura 2023
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              <img
                src={meliBio}
                alt=""
                className="absolute bottom-[-1em] right-[-2.1em] w-[24em] h-[24em]   md:w-[30em] md:h-[30em] md:bottom-[-2em] md:right-[-5em] object-contain "
              />
            </div>
          </div>
          <div className="flex items-center justify-around md:justify-center md:items-center p-2  md:gap-12">
            {/* mvp */}
            <div className="flex flex-col w-1/2">
              <span className="info text-sm  md:text-lg  font-semibold">
                Reconocimientos
              </span>{" "}
              <div className="">
                <div>
                  <span className="info text-[0.6em] md:text-lg ">
                    M.V.P Provincial 2017
                  </span>
                </div>

                <span className="text-[0.6em] md:text-lg ">
                  🏆 Jugadora destacada Puerto Madryn
                </span>
              </div>
              <div className="">
                <div>
                  <span className="info text-[0.6em] md:text-lg ">
                    M.V.P Provincial 2022
                  </span>
                </div>

                <span className="text-[0.6em] md:text-lg ">
                  🏆 Jugadora destacada Puerto Madryn
                </span>
              </div>
            </div>

            {/* Selecciones */}
            <div className="flex gap-2  justify-end w-1/2 md:flex md:justify-center ">
              <section className=" flex flex-col items-center justify-center">
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-xl  font-semibold">
                    2013 / 2023
                  </span>
                  <img src={cafs} alt="cafs" className="w-10 h-10" />
                </div>
                <span className="text-sm md:text-xl  font-semibold">
                  SELECCIÓN NACIONAL{" "}
                </span>{" "}
                <span className="info text-xl md:text-lg ">
                  ARGENTINA C.A.F.S
                </span>
                <div className="mt-2">
                  <div className="flex gap-3">
                    <span className="text-[0.6em]  md:text-lg ">🏆4to</span>
                    <span className="text-[0.6em]  md:text-lg ">
                      2013 Mundial Colombia
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[0.6em] md:text-lg ">🏆2do</span>
                    <span className="text-[0.6em] md:text-lg ">
                      2023 Mundial Argentina
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
