import { IoSnow } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

export const About = (props) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { ref: imgref, inView: imginView } = useInView({ triggerOnce: true });

  return (
    <>
      <div className="mt-8  p-4 md:grid md:grid-cols-2  items-center justify-around lg:w-[976px]	">
        <div
          ref={ref}
          className={
            inView
              ? "opacity-100 ease-in duration-500"
              : "opacity-0 -translate-x-1/3"
          }
        >
          <div className="text-4xl   font-bold">
            HI, I'M OTHMANE.
            <br />
            A FRONT-END DEVELOPER <br />
            WITH A PASSION FOR <br />
            ALL THINGS WEB DEVELOPMENT.
          </div>
          <div className="mt-4 text-xl font-semibold  items-center gap-2 sm:flex ">
            <span>FRONT-END </span>
            <IoSnow className="text-sm text-red-p" />
            <span> DEVELOPMENT </span>
            <IoSnow className="text-sm text-red-p" />
            <span> DESIGN </span>
          </div>
          {/* buttons here */}
          <div className="flex justify-center">
            {/* <button className="mr-0 md:mr-8 bg-black-p text-grey-p hover:bg-grey-p hover:text-black-p">DOWLOAD RESUME</button> */}
            <a
              className="btn mr-0 md:mr-8 bg-black-p text-grey-p hover:bg-grey-p hover:text-black-p"
              href="othmane-elkantaoui-cv.pdf"
              download
            >
              DOWLOAD RESUME
            </a>
            <a
              className="btn bg-red-p text-grey-p hover:bg-grey-p hover:text-black-p"
              href="https://github.com/polymahh"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        {/* image */}
        <img
          ref={imgref}
          className={
            imginView
              ? "opacity-100 ease-in delay-200 duration-500 sm:w-3/4 m-auto"
              : "opacity-0 translate-x-1/3"
          }
          src="profile4.png"
          alt="othmane"
        />
      </div>
      {/* scrolling bar */}
      <div className="relative overflow-hidden min-w-full bg-black-p p-12 my-6 whitespace-nowrap">
        <div className="absolute top-0 left-0 bg-black-p text-grey-p text-2xl flex items-center justify-start gap-6 transition-all delay-100 ease-linear h-full">
          <div className="flex anim">
            <div
              id="holder"
              className="transition-all delay-200 ease-linear flex items-center"
            >
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>React.js</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>JavaScript</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>HTML5</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>CSS3</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>TailWindCss</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>Jest</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>Webpack</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>NPM</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>Next.js</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>Redux</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>TypeScript</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>Chakra UI</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>jQuery</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>Bootstrap</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>Git</h4>
            </div>
            <div
              id="holder"
              className="transition-all delay-200 ease-linear flex items-center"
            >
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>React.js</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>JavaScript</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>HTML5</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>CSS3</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>TailWindCss</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>Jest</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>Webpack</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>NPM</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>Next.js</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>Redux</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>TypeScript</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>Chakra UI</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>jQuery</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>Bootstrap</h4>
              <IoSnow className="text-xl text-red-p mx-10" />
              <h4>Git</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
