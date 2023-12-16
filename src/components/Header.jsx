import React from "react";
import Logo from "../assets/Disney-Plus-Logo.png";
import { HiHome, HiStar } from "react-icons/hi";
import { PiFilmReelFill } from "react-icons/pi";
import { IoMdAddCircle } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiTelevisionBold } from "react-icons/pi";
import HeaderItems from "./HeaderItems";
import ProfileIcon from "../assets/8TysGUZ0I12C6YWxZUdhVfEus.webp";

const Header = () => {
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
      <div className="flex gap-8 items-center ">
      <img
        src={Logo}
        alt="Disney"
        className="w-[80px] md:w-[100px] object-cover "
      />
      {menu.map(({ id, title, icon }) => {
        return <HeaderItems id={id} title={title} Icon={icon} key={id} />;
      })}
      </div>
      <img src={ProfileIcon} alt="" className="w-[45px] rounded-full"/>
    </div>
  );
};

export default Header;
