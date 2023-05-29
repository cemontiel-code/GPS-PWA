import { useState } from "react";
import { BsChevronDoubleLeft } from "react-icons/bs";
import "./app.css";

function Component({ children, icon, color, desc, imgUrl, title }) {
  const [active, setActive] = useState(false);

  function clickHandler() {
    setActive(!active);
    console.log(active);
  }

  return (
    <div>
      {active ? (
        <>
          <div
            className={active ? "anime bg-right-bottom hero min-h-screen open z-20" : "anime closed "}
            style={{ backgroundImage: 'url("' + imgUrl + '")' }}
          >
            <button
              className="btn btn-warning mask mask-squircle fixed top-5 right-5 anime z-10"
              onClick={clickHandler}
            >
              <BsChevronDoubleLeft size={"24px"}></BsChevronDoubleLeft>
            </button>
            <div className={active ? "anime hero-overlay bg-opacity-60 blur-sm":"anime closed"}></div>
            <div className={active ? "anime hero-content text-center text-neutral-content" : "anime closed"}>
              <div className="gap-10">
                <h1 className={active ? "anime mb-5 text-5xl font-bold":"anime closed"}>{title}</h1>
                <div className={active ?  "anime py-6 bg-white rounded-xl text-left w-full px-5 text-primary":"anime closed hidden"}>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="anime flex flex-col ">
          <button
            className={
              "anime btn btn-lg w-full mask mask-hexagon btn-" + color
            }
            onClick={clickHandler}
          >
            {icon}
          </button>
          <label className=" text-center capitalize font-sans">{title}</label>
        </div>
      )}
    </div>
  );
}
export default Component;
