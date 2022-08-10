import { useState } from "react";
import { IoMenu } from "react-icons/io5";


export const Header = ()=> {
    const [menu,setMenu] = useState(false)
    const toggleMenu = ()=> setMenu(!menu)
    return(
        <>
            <div className="flex justify-between bg-transparent items-center font-semibold lg:w-[976px]">
                <div className="text-4xl p-4 font-bold">Logo</div>
                <div className="hidden sm:flex">
                    <ul className="flex items-center text-xl pt-2 ">
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <button className="hidden sm:block">
                    Contact
                </button>
                <button className=" sm:hidden py-1 px-2" onClick={()=> toggleMenu()}>
                <IoMenu className=" text-2xl"/>
                </button>
                
            </div>
            <div className={!menu ? "hidden" : "flex flex-col bg-black-p text-grey-p absolute right-0 px-6 w-3/5 min-w-max "}>
                    <ul>
                        <li bg-black-p>Home</li>
                        <li bg-black-p>About</li>
                        <li bg-black-p>Projects</li>
                    </ul>
                <button className="max-w-max text-base py-1"  >
                    Contact
                </button>
            </div>
        </>
    )
    
}