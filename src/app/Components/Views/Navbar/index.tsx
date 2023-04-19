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
            <nav className=" bg-slate-400 opacity-80 sticky top-0 left-0 right-0 w-full flex space-x-8 justify-between px-9 py-2 ">

                <div className="flex space-x-14">

                    <div className="select-none">
                        <img src="logo.svg" alt="logo" />
                    </div>

                    <Navitem />
                </div>

                <div className="flex items-center justify-end  space-x-4 select-none">
                    <div >
                        <IoMdNotificationsOutline fontSize={30} filter="12" fill="red" fillOpacity={10} />
                    </div>
                    <div className="text-3xl font-bold ">|</div>
                    <div className="">
                        {theme ?
                            (<MdDarkMode fill="black" fontFamily="extrabold" fontSize={30} onClick={() => (settheme(!theme))} />)
                            :
                            (<MdOutlineLightMode fill="yellow" fontSize={35} onClick={() => (settheme(!theme))} />)
                        }
                    </div>

                    <div className="flex sm:hidden">
                        {
                            vlaue ?
                                (<GiHamburgerMenu fontSize={35} fill="#2ee88e" onClick={() => { setvlaue(!vlaue) }} />)
                                :
                                (<IoMdClose fontSize={40} fill="red" onClick={() => { setvlaue(!vlaue) }} />)
                        }
                    </div>

                    <div className="hidden md:flex">
                        <Button label="join now" />
                    </div>


                </div>
            </nav>

            <div className={`${vlaue ? "hidden" : "flex"}`}>
                <Mbnav />
            </div>



        </>
    )
}

