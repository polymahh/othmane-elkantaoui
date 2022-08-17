import { IoSnow } from "react-icons/io5";


export const About = (props)=> {
    return(
        <>
        <div ref={props.about} className="mt-8  p-4 md:grid md:grid-cols-2  items-center justify-around lg:w-[976px]	">
        <div >
            <div className="text-4xl   font-bold">
                HI, I'M OTHMANE.<br />
                A FRONT-END DEVELOPER <br />
                WITH A PASSION FOR <br />
                ALL THINGS WEB DEVELOPMENT.
                
            </div>
            <div className="mt-4 text-xl font-semibold  items-center gap-2 sm:flex " >
            <span>FRONT-END </span>
            <IoSnow className="text-sm text-red-p"/>
            <span> DEVELOPMENT </span>
            <IoSnow className="text-sm text-red-p"/>
            <span> DESIGN </span>
            </div>
            {/* buttons here */}
            <div className="flex justify-center">
                {/* <button className="mr-0 md:mr-8 bg-black-p text-grey-p hover:bg-grey-p hover:text-black-p">DOWLOAD RESUME</button> */}
                <a className="btn mr-0 md:mr-8 bg-black-p text-grey-p hover:bg-grey-p hover:text-black-p"
                href="../media/CV-Othmane-Elkantaoui.ae962a1356c3daa1ec08.pdf" download>DOWLOAD RESUME</a>
                <button className="mr-0 md:mr-8" onClick={()=> props.ScrollDown(props.contactRef)}>CONTACT</button>
            </div>

        </div>
        {/* image */}
        <img className="   sm:w-3/4 m-auto" src={require(`../Assets/profile4.png`)}  alt="othmane" />
        </div>
        {/* scrolling bar */}
        <div className="relative overflow-hidden min-w-full bg-black-p p-12 my-6 whitespace-nowrap">
            <div className="absolute top-0 left-0 bg-black-p text-grey-p text-2xl flex items-center justify-start gap-6 transition-all delay-100 ease-linear h-full">
                <div className="flex anim">
                    <div id="holder" className="transition-all delay-200 ease-linear flex items-center">
                        <IoSnow className="text-xl text-red-p mx-8"/>
                        <h4>React.Js</h4>
                        <IoSnow className="text-xl text-red-p mx-8"/>
                        <h4>JavaScript</h4>
                        <IoSnow className="text-xl text-red-p mx-8"/>
                        <h4>HTML5</h4>
                        <IoSnow className="text-xl text-red-p mx-8"/>
                        <h4>CSS3</h4>
                        <IoSnow className="text-xl text-red-p mx-8"/>
                        <h4>TailWindCss</h4>
                        <IoSnow className="text-xl text-red-p mx-8"/>
                        <h4>Jest</h4>
                        <IoSnow className="text-xl text-red-p mx-8"/>
                        <h4>Webpack</h4>
                        <IoSnow className="text-xl text-red-p mx-8"/>
                        <h4>NPM</h4>
                    </div>
                    <div id="holder" className="transition-all delay-200 ease-linear flex items-center">
                        <IoSnow className="text-xl text-red-p mx-8"/>
                        <h4>React.Js</h4>
                        <IoSnow className="text-xl text-red-p mx-8"/>
                        <h4>JavaScript</h4>
                        <IoSnow className="text-xl text-red-p mx-8"/>
                        <h4>HTML5</h4>
                        <IoSnow className="text-xl text-red-p mx-8"/>
                        <h4>CSS3</h4>
                        <IoSnow className="text-xl text-red-p mx-8"/>
                        <h4>TailWindCss</h4>
                        <IoSnow className="text-xl text-red-p mx-8"/>
                        <h4>Jest</h4>
                        <IoSnow className="text-xl text-red-p mx-8"/>
                        <h4>Webpack</h4>
                        <IoSnow className="text-xl text-red-p mx-8"/>
                        <h4>NPM</h4>
                    </div>
                </div>
            </div>
            
        </div>
    </>
    )
}