import React, { useState } from "react";
import Logo from "../assets/Disney-Plus-Logo.png";
import { HiHome, HiStar, HiDotsVertical } from "react-icons/hi";
import { PiFilmReelFill } from "react-icons/pi";
import { IoMdAddCircle } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiTelevisionBold } from "react-icons/pi";
import HeaderItems from "./HeaderItems";
import ProfileIcon from "../assets/8TysGUZ0I12C6YWxZUdhVfEus.webp";

const Header = () => {

    const [toggle,setToggle] = useState(false)

  const menu = [
    {
      id: 1,
      title: "HOME",
      icon: HiHome,
    },
    {
      id: 2,
      title: "SEARCH",
      icon: FaMagnifyingGlass,
    },
    {
      id: 3,
      title: "WATCHLIST",
      icon: IoMdAddCircle,
    },
    {
      id: 4,
      title: "ORGINALS",
      icon: HiStar,
    },
    {
      id: 5,
      title: "MOVIES",
      icon: PiFilmReelFill,
    },
    {
      id: 6,
      title: "SERIES",
      icon: PiTelevisionBold,
    },
  ];

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img
          src={Logo}
          alt="Disney"
          className="w-[80px] md:w-[100px] object-cover"
        />
        <div className="hidden md:flex gap-8">
          {menu.map(({ id, title, icon }) => (
            <HeaderItems title={title} Icon={icon} key={id} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(({ id, title, icon },index) =>
            index < 3 &&  (<HeaderItems  title={''} Icon={icon} key={id} />
          ))}
            <div className="md:hidden" onClick={() => setToggle(!toggle)}>
              <HeaderItems title={''} Icon={HiDotsVertical}/>
              {toggle ? 
              <div className="absolute bg-[#121212] mt-3 px-5 py-3 border-[1px] border-gray-700">
              {menu.map(({ id, title, icon },index) =>
              index > 2 && ( <HeaderItems title={title} Icon={icon} key={id} />
              ))} 
              </div> : null}
            </div>
        </div>
      </div>
      <img src={ProfileIcon} alt="" className="w-[45px] rounded-full" />
    </div>
  );
};

export default Header;
