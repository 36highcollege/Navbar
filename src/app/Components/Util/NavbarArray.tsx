import { BiCaretDown } from "react-icons/bi";

interface Barvalue {
    label: string;
    href: string;
    dropdown?: boolean;
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
        dropdown: true,
    },

    {
        label: "Login",
        href: "/",
    },

];

export default function Navitem() {
    return (
        <div className="hidden sm:flex items-center justify-center space-x-6">
            {Navbaritem.map((item: any , index:any) => (
                <div key={index+44} className="hover:underline hover:text-gray-800 font-semibold text-lg group">
                    <div className="cursor-pointer flex items-center select-none">
                        {item.label} {item.dropdown ? <div className=" group-hover:rotate-180 duration-500 mt-1"> <BiCaretDown /></div> : ""}
                    </div>
                </div>
            ))}
        </div>
    )
};
