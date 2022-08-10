import { IoSnow } from "react-icons/io5";


export const About = ()=> {
    return(
        <>
        <div className="mt-8 p-4 sm:p-0 sm:flex  items-center flex-wrap justify-around lg:w-[976px]	">
        <div >
            <div className="text-4xl   font-bold">
                HI, I'M OTHMANE.<br></br>
                A CREATIVE DESIGNER<br></br>
                BASED IN LONDON
            </div>
            <div className="mt-4 text-xl font-semibold  items-center gap-2 sm:flex " >
            <span>DESIGN </span>
            <IoSnow className="text-sm text-red-p"/>
            <span> DEVELOPMENT </span>
            <IoSnow className="text-sm text-red-p"/>
            <span> WEBFLOW </span>
            </div>
            {/* buttons here */}
            <div className="flex justify-center">
                <button className="mr-1 bg-black-p text-grey-p hover:bg-grey-p hover:text-black-p">DOWLOAD RESUME</button>
                <button>CONTACT</button>
            </div>

        </div>
        {/* image */}
        <img className="md:w-2/5 sm:w-3/4  " src="https://assets.website-files.com/62673e4070051ac9b30ad8c7/626a08b7ad20d840cca00273_Header%20Image%20Large.png"  alt="othmane" />
        </div>
        {/* scrolling bar */}
        <div className="overflow-hidden min-w-full">
            <div className="bg-black-p w-[110%] ml-[-10px] text-grey-p py-4 text-xl flex items-center gap-3 my-6 ">
                <span>React.Js</span>
                <IoSnow className="text-sm text-red-p"/>
                <span>JavaScript</span>
                <IoSnow className="text-sm text-red-p"/>
                <span>HTML5</span>
                <IoSnow className="text-sm text-red-p"/>
                <span>CSS3</span>
                <IoSnow className="text-sm text-red-p"/>
                <span>TailWindCss</span>
                <IoSnow className="text-sm text-red-p"/>
                <span>Jest</span>
                <IoSnow className="text-sm text-red-p"/>
                <span>Webpack</span>
                <IoSnow className="text-sm text-red-p"/>
                <span>NPM</span>
                <IoSnow className="text-sm text-red-p"/>
            </div>
        </div>
    </>
    )
}