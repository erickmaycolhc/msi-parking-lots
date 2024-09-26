/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";

import SidebarCard from "@/components/sidebar/components/SidebarCard";
import { IRoute } from "@/types/navigation";
import React from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import NavLink from "../link/NavLink";
function SidebarHorizon(props: { routes: IRoute[]; [x: string]: any }) {
  const [darkmode, setDarkmode] = React.useState(
    document.body.classList.contains("dark")
  );
  const { routes, open, setOpen } = props;

  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96 xl:translate-x-0"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={() => setOpen(false)}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <div className="ml-1 mt-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          MUNI <span className="font-medium">MSI</span>
        </div>
      </div>
      <div className="mb-7 mt-[58px] h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
        <NavLink href={"#"}>
          <div
            className="relative mb-3 flex hover:cursor-pointer"
            onClick={() => {
              if (darkmode) {
                document.body.classList.remove("dark");
                setDarkmode(false);
              } else {
                document.body.classList.add("dark");
                setDarkmode(true);
              }
            }}
          >
            <li className="my-[3px] flex cursor-pointer items-center px-10">
              <span className={"font-bold text-brand-500 dark:text-white"}>
                {darkmode ? (
                  <RiSunFill className="h-4 w-4  text-gray-600 dark:text-white" />
                ) : (
                  <RiMoonFill className="h-4 w-4 text-[#422afb]  text-gray-600 dark:text-white " />
                )}
              </span>
              <p
                className={
                  "leading-1 ml-4 flex font-bold text-navy-700 dark:text-white btn-theme-app"
                }
              >
                {darkmode ? "Claro" : "Oscuro"}
              </p>
            </li>
          </div>
                
        </NavLink>
      </ul>

      {/* Nav item end */}
    </div>
  );
}

export default SidebarHorizon;
