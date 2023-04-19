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

            <div className="hidden sm:flex  items-center space-x-11   h-16">

                {Navbaritem.map((item: any) => (
                    <>
                        <div className="hover:mb-4  hover:underline  hover:text-green-500 font-bold text-xl transition-all duration-500 ">
                            <div className="cursor-pointer flex select-none">
                                {item.label} {item.dropdown ? <div className="p-2"> <BiCaretDown /></div> : ""}
                            </div>
                        </div>

                    </>
                ))}
            </div >
        </>
    )
}
