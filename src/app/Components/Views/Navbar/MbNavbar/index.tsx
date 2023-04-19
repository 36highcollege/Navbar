import { Navbaritem } from "@/app/Components/Util/NavbarArray";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Mbnav() {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full  m-2 rounded-md bg-gradient-to-t to-red-100 via-teal-200 from-sky-100">
                {Navbaritem.map((item: any) => (
                    <>
                        <div className="border-2 border-blue-800 ">
                            <div className=" my-4 border-4 border-orange-500  text-xl font-semibold cursor-pointer flex space-x-4 select-none">
                                {item.label}
                                {item.dropdown ? <div>
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