import {  useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoSnow } from "react-icons/io5";



export const Header = (props)=> {
    const [menu,setMenu] = useState(false)
    const toggleMenu = ()=> setMenu(!menu)


    return(
        <>
            <div className="flex justify-between bg-transparent items-center font-semibold lg:w-[976px]">
                <div className="text-4xl p-4 font-bold flex text-red-p gap-2 items-end">
                    <IoSnow/> O.ELK
                </div>
                <div className="hidden sm:flex">
                    <ul className="flex items-center text-xl pt-2 ">
                        {/* <li>Home</li> */}
                        <li onClick={()=> props.ScrollDown(props.about)}>About</li>
                        <li onClick={()=> props.ScrollDown(props.projects)}>Projects</li>
                    </ul>
                </div>
                <button className="hidden sm:block" onClick={()=> props.ScrollDown(props.contactRef)} >
                    Contact
                </button>
                <button className=" sm:hidden py-1 px-2" onClick={()=> toggleMenu()}>
                <IoMenu className=" text-2xl"/>
                </button>
                
            </div>
            <div className={!menu ? "hidden" : "flex flex-col bg-black-p text-grey-p absolute right-0 top-16 px-6 w-3/5 min-w-max "}>
                    <ul>
                        {/* <li bg-black-p>Home</li> */}
                        <li onClick={()=> {
                            props.ScrollDown(props.about)
                            toggleMenu()
                        }}>About</li>
                        <li onClick={()=>{
                            props.ScrollDown(props.projects)
                            toggleMenu()
                        }}>Projects</li>
                    </ul>
                <button className="max-w-max text-base py-1" onClick={()=>{
                    props.ScrollDown(props.contactRef)
                    toggleMenu()
                }} >
                    Contact
                </button>
            </div>
        </>
    )
    
}