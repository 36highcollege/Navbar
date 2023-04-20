import { BiCaretDown } from "react-icons/bi";

interface Barvalue {
    label: string;
    href: string;
    dropdown?: any;
}

export let Navbaritem: Array<Barvalue> = [

    {
        label: "About",
        href: "/About",
    },
    {
        label: "Courses",
        href: "/Couses",
    },
    {
        label: "Contact",
        href: "/Contact",
        dropdown: " ",
    },

    {
        label: "Login",
        href: "/",
    },

];



export default function Navitem() {
    return (
        <>

            <div className="hidden sm:flex  items-center justify-center space-x-11   h-16">

                {Navbaritem.map((item: any) => (
                    <>
                        <div className="hover:underline hover:text-teal-400 font-bold text-xl transition-all duration-700 ">
                            <div className="cursor-pointer flex items-center select-none">
                                {item.label} {item.dropdown ? <div className=" hover:translate-y-2 transition-all duration-500 hover:text-black"> <BiCaretDown /></div> : ""}
                            </div>
                        </div>

                    </>
                ))}
            </div >
        </>
    )
}
