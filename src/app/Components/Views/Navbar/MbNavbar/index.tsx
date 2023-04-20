import { Navbaritem } from "@/app/Components/Util/NavbarArray";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Mbnav() {
    return (
        <>
            <div className="max-w-7xl flex flex-col items-center justify-center w-full  m-2 px-4 rounded-md bg-gradient-to-t to-red-100 via-teal-200 from-sky-100">
                {Navbaritem.map((item: any) => (
                    <>
                        <div className="w-full flex  border-b-2 border-gray-400 ">
                            <div className=" my-4 text-xl font-semibold cursor-pointer flex items-center space-x-4 select-none hover:translate-x-2 transition-all duration-700">
                                {item.label}
                                {item.dropdown ? 
                                <div className="hover:translate-x-1 hover:text-red-500 transition-all duration-700">
                                    <IoIosArrowRoundForward />
                                </div>
                                    : ""}
                            </div>
                        </div>

                    </>

                ))}
            </div >
        </>
    )
}
// FiChevronsDown

// AiFillCaretDown