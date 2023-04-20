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
    const [vlaue, setvlaue] = useState(true)
    const [theme, settheme] = useState(true)
    return (
        <>
            <nav className="max-w-7xl bg-slate-400 opacity-100 sticky top-0 left-0 right-0 w-full flex space-x-8 items-center justify-between px-4 py-2 ">

                <div className="flex space-x-6  items-center justify-between">

                    <div className="select-none ">
                        <img src="logo.svg" alt="logo" />
                    </div>

                    <Navitem />
                </div>

                <div className="flex items-center justify-end  space-x-4 select-none">
                    <div >
                        <IoMdNotificationsOutline fontSize={30} filter="12" fill="black" fillOpacity={10} />
                    </div>
                    <div className="text-3xl font-bold ">|</div>
                    <div className="">
                        {theme ?
                            (<MdDarkMode fill="black" fontFamily="extrabold" fontSize={25} onClick={() => (settheme(!theme))} />)
                            :
                            (<MdOutlineLightMode fill="yellow" fontSize={25} onClick={() => (settheme(!theme))} />)
                        }
                    </div>

                    <div className="flex w-6 sm:hidden ">
                        {
                            vlaue ?
                                (<GiHamburgerMenu fontSize={20} fill="#3DD4D4" onClick={() => { setvlaue(!vlaue) }} />)
                                :
                                (<IoMdClose fontSize={20} fill="red" onClick={() => { setvlaue(!vlaue) }} />)
                        }
                    </div>

                    <div className="hidden md:flex">
                        <Button label="join now" />
                    </div>


                </div>
            </nav>

            <div className={`${vlaue ? "flex opacity-5 -translate-y-3 transition-all duration-1000" : "flex translate-y-3 transition-all duration-700"}`}>
                <Mbnav />
            </div>



        </>
    )
}

