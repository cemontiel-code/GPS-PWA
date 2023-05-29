import "./app.css";
import Component from "./Component";
import Hero from "./hero";
import React, { useState, useEffect } from "react";
import Records from "./data/Us.json";
import ServiceList from "./data/servcices.json";
import TechList from "./data/tech.json"

import { IoMdBusiness } from "react-icons/io";
import { MdMiscellaneousServices as Techno } from "react-icons/md";
import { BsWater as Hidrografia } from "react-icons/bs";
import { RiGpsLine as Topografia } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  });

  return (
    <div className=" p-0 m-0">
      <div
        className="-z-50 bg-slate-200 h-[100vh] w-[100vw] fixed top-0 bg-cover"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1433840496881-cbd845929862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=50")',
        }}
      ></div>

      <Hero></Hero>
      <div className="container sm:w-3/4 mx-auto h-full content-center shadow-2xl my-auto bg-white sm:bg-base-300 sm:bg-opacity-40 ">
        {Records &&
          Records.map((record) => {
            if (record.id == 1) {
              return (
                <div className="mx-auto my-auto flex flex-col" key={record.id}>
                  <CgProfile
                    size={96}
                    className="mx-auto mt-12 bg-white rounded-full "
                  ></CgProfile>
                  <h2
                    className="text-center font-bold capitalize mt-6 underline-offset-4 underline my-auto text-5xl"
                    id={"Us-" + record.id}
                  >
                    {record.title}{" "}
                  </h2>
                  <div className="gap-5 my-16 w-5/6 mx-auto">
                    {record.Content &&
                      record.Content.map((data) => {
                        return (
                          <div key={data.id} className="text-center  mb-10">
                            <h3 className="text-center text-4xl font-bold  mb-5 ">
                              {data.title}
                            </h3>

                            <p className="text-center  text-2xl mx-auto p-3 rounded-lg bg-white">
                              {data.Content}
                            </p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className="mx-auto my-auto  gap-10 p-20 ghost"
                  key={record.id}
                >
                  <></>
                  <CgProfile size={96} className="mx-auto "></CgProfile>
                  <h2
                    className="text-center font-bold capitalize mt-6 underline-offset-4 underline my-auto text-5xl"
                    id={"Us-" + record.id}
                  >
                    {record.title}{" "}
                  </h2>
                  <p className="text-center my-16 w-5/6 mx-auto text-2xl">
                    {record.Content}
                  </p>
                </div>
              );
            }
          })}
      </div>
      <section
        id="services"
        aria-label="servicios"
        className="container gap-10 sm:w-3/4 min-h-screen flex flex-col items-center p-5 mx-auto h-full bg-white"
      >
        <h3 className="text-center text-ellipsis text-3xl font-bold my-auto mx-auto">
          Lista de Servicios.
        </h3>

        <div className="mx-auto my-auto w-1/2 grid grid-cols-3 gap-14">
          {ServiceList &&
            ServiceList.map((data, x) => {
              return (
                <Component
                  icon={<Hidrografia />}
                  size={"48"}
                  color={"accent"}
                  key={data.id}
                  title={data.title}
                  imgUrl={data.imgURL}
                >
                  <ul className="list-disc list-inside">
                    {data.Content.map((x, i) => {
                      return (
                        <li className="text-xl " key={x.id}>
                          {x.desc}
                        </li>
                      );
                    })}
                  </ul>
                </Component>
              );
            })}
        </div>
        <section
          id="proyects"
          aria-label="lista de projectos"
          className="container gap-10 sm:w-3/4 min-h-screen flex flex-col items-center p-5 mx-auto h-full bg-white"
        >
          <h3 className="text-center text-ellipsis text-3xl font-bold my-auto mx-auto">
            Lista de Servicios.
          </h3>

          <div className="mx-auto my-auto text-center grid grid-cols-5 gap-14">
            {TechList &&
              TechList.map((data, x) => {
                return (
                  <Component
                    icon={<Techno />}
                    size={"48"}
                    color={"primary"}
                    key={x}
                    title={data.name}
                    imgUrl={data.imgURL}
                  >
                  <p className="text-xl text-center ">
                    {data.desc}
                  </p>
                  </Component>
                );
              })}
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
/*
Foto de <a href="https://unsplash.com/es/@valerief?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Valerie V</a> en <a href="https://unsplash.com/es/s/fotos/Herramienta-de-topograf%C3%ADa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

*/
