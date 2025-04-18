import { NavbarMenu } from "../mockData/data";
import { IoCodeDownloadOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { ResponsiveMenu } from "./ResponsiveMenu"
import logo  from "../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="w-full">
                <div className="container flex justify-between items-center w-full mx-auto px-4 md:px-0 fixed left-0 right-0 top-0 z-50">
                    <div className=" flex items-center gap-2 font-bold dm-serif-text-regular cursor-pointer">
                        <img width={35} src={logo} alt="logo"/>
                        <p className="logo">Daniel Dev</p>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-6 text-gray-600 fira-sans-condensed-medium">
                            {
                                NavbarMenu.map((item) => {
                                    return <li key={item.id}><a href={item.href} className="inline-block py-1 px-3 text-xl hover:text-purple-700 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full">{item.title}</a></li>;
                            })
                            }
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <button className="text-xl flex gap-2 justify-center items-center text-white bg-purple-600 border-2 px-6 py-2 cursor-pointer rounded-3xl hover:bg-white hover:text-black hover:border-b-purple-800 hover:border-2 ">
                            <IoCodeDownloadOutline />Download CV
                        </button>
                    </div>
                    <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <MdMenu className="text-3xl"/>
                    </div>
                </div>
            </nav>

            {/*Mobile sidebar section*/}
            <ResponsiveMenu className="md:hidden" open={isOpen}/>
        </>
    );
};

export default Navbar;
