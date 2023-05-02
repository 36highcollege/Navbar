"use client"
import { useState } from "react";
import Navitem, { Navbaritem } from "../../Util/NavbarArray";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io"
import { IoMdClose } from "react-icons/io";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import Mbnav from "./MbNavbar";
import Button from "@/app/Button";


export default function Navbar() {
    const [vlaue, setvlaue] = useState(true);
    const [theme, settheme] = useState(true)
    return (
        <nav className="bg-slate-400 sticky top-0 left-0 right-0 w-full p-2">
            <div className="max-w-[85rem] mx-auto flex items-center justify-between ">
                <div className="flex space-x-10 items-center justify-between">
                    <div className="select-none">
                        <img src="logo.svg" alt="logo" className="max-w-[6rem]" />
                    </div>
                    <Navitem />
                </div>
                <div className="flex items-center space-x-3">
                    <IoMdNotificationsOutline fontSize={20} filter="12" fill="black" fillOpacity={10} />
                    <div className="text-xl font-semibold ">|</div>
                    {theme ?
                        (<MdDarkMode fill="black" fontFamily="extrabold" fontSize={20} onClick={() => (settheme(!theme))} />)
                        :
                        (<MdOutlineLightMode fill="yellow" fontSize={20} onClick={() => (settheme(!theme))} />)
                    }
                    <div className="flex w-6 sm:hidden ">
                        {
                            vlaue ?
                                (<GiHamburgerMenu fontSize={20} fill="#8cdedb" onClick={() => { setvlaue(!vlaue) }} />)
                                :
                                (<IoMdClose fontSize={20} fill="red" onClick={() => { setvlaue(!vlaue) }} />)
                        }
                    </div>
                    <div className="hidden md:flex">
                        <Button label="join now" />
                    </div>
                </div>
            </div>
            <div className={`${vlaue ? "hidden" : "flex mt-1"}`}>
                <Mbnav />
            </div>
        </nav>
    )
};