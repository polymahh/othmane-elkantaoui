import { IoSnow } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";

export const Footer = ()=> {
    return (
        <div className=" bg-black-p w-full p-8">

            <div className="grid sm:grid-cols-2 gap-4 lg:w-[976px] text-grey-p text-xl m-auto">
                <div className="flex items-center gap-4 place-self-center lg:place-self-start">
                    <IoSnow className="text-2xl text-grey-p row-span-2"/>
                    <div>
                    <a href='/'>GitHub for this website</a>
                    </div>
                    
                </div>
                <div className="flex items-center gap-4 place-self-center text-2xl lg:place-self-end">
                <IoSnow />
                <IoLogoLinkedin />
                <IoLogoFacebook />

                </div>
            </div>
        </div>
    )
}