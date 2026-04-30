import React from "react";
import Typography from "../common/Typography";
import { Link, useLocation } from "react-router";
import Btn from "../common/Btn";
import { navbar } from "../../assets/constant/navbar";

function Navbar() {
  const location = useLocation();
  return (
    <div className=" flex justify-between md:pr-6 md:pl-4 py-3 md:flex-row flex-col ">
      {/* above md: all containers will in row */}
      {/* NAV LOGO */}
      <div className=" inline md:block py-2">
        <Typography variant="h2" className="font-semibold text-textBlue px-4">
          TutorNest
        </Typography>
      </div>
      {/* NAV LINKS */}
      <div className="flex gap-1 items-center flex-col md:flex-row">
        {navbar.map((item, key) => {
          return (
            <Link
              to={item.pathName}
              key={key}
              className={`${location?.pathname === item.pathName ? "md:border-t-2 md:border-textBlue" : ""} font-medium text-sm py-2 px-5 border-non  whitespace-nowrap gap-2 hover:bg-[#F7F7F7] button w-full  `}
            >
              <Typography
                variant="h6"
                className="font-medium text-sm py-0.5  px-1.5 border-non rounded-md whitespace-nowrap gap-2 min-h-9 button w-full "
              >
                {item.pathValue}
              </Typography>
            </Link>
          );
        })}
      </div>
      {/* LOGIN BUTTONS */}
      <div className="flex gap-1 flex-col md:flex-row py-3">
        {/* if greater than md gap will  */}
        <Btn variant="white">Login</Btn>
        <Btn variant="blue">Sign Up</Btn>
      </div>
    </div>
  );
}

export default Navbar;
