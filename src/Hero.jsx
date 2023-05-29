import gpsLogo from "/logo.png";
import "./app.css";

import { useState, useEffect } from "react";
/*
import { IoMdBusiness } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { BsWater } from "react-icons/bs";
import { RiGpsLine } from "react-icons/ri";*/

function Hero() {
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const [Active, setActive] = useState(false);

  const getScrollPostionY = () => {
    setScrollPositionY(window.scrollY);
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", getScrollPostionY);
    };

    watchScroll();
    if (scrollPositionY > 250) {
      console.log("trigger!!");
      setActive(true);
    }
    if (scrollPositionY < 250) {
      console.log("trigger~~");
      //setActive(false)
    }
    return () => {
      window.removeEventListener("scroll", setScrollPositionY);
    };
  });

  return (
    <div className="p-0 m-0 aniTrans">
      <div className=" aniTrans hero h-[10vh] relative sm:min-h-screen shadow-2xl ">
         <svg
        viewBox="0 0 1320 300"
        className="h-full sm:h-3/4 w-full absolute bottom-0  right-0 -z-10  "
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="sineWave"
            fillOpacity="0.3"
            d="	M0,192	C220,100,440,100,660,192	C880,290,1100,290,1320,192	"
          />
          <path
            id="sineWave1"
            fillOpacity="0.3"
            d="	M0,192	C220,290,440,290,660,192 C880,100,1100,100,1320,192"
          />
          <path
            id="sineWave2"
            fillOpacity="0.2"
            d="	M0,192	C220,100,440,100,660,192	C880,290,1100,290,1320,192	L1320 500	L0 500"
          />
        </defs>
        <use x="" fill="#00AFEF" href="#sineWave" />
        <use x="" fill="#006FC0" href="#sineWave1" />
        <use x="" fill="#0DC58D" href="#sineWave2" />
      </svg>
        <div className="hero-content flex flex-col lg:flex-row p-0">
          <div className="bg-white sm:absolute  h-full sm:w-2/5 flex sm:flex-col sm:left-0">
            <img src={gpsLogo} alt="car!" className="w-48 sm:w-5/6 sm:my-auto mx-auto" />
          </div>
          <div className="hidden md:block container-flex  absolute left-1/2   ">
            <h1 className="sm:text-5xl font-bold w-2/3 text-center italic  capitalize">
               '' productivo, garantizando de esta forma empeñamos al mejoramiento
              continuo de nuestros procesos y sistema ''
            </h1>
          </div>
        </div>
      </div>

      <div
        className={
          Active
            ? "card aniTrans bg-black sticky top-0"
            : "card aniTrans md:card-side ghost w-full h-[100vh] "
        }
      ></div>
    </div>
  );
}

export default Hero;
