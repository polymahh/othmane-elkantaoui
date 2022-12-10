import { InView, useInView } from "react-intersection-observer";
import { IoCaretForwardCircleSharp } from "react-icons/io5";

export const ProjectCard = ({ item }) => {
  const { ref, inView } = useInView({ rootMargin: "-300px 0px" });

  return (
    <>
      <div
        ref={ref}
        className="flex flex-col relative md:flex-row gap-6 lg:max-w-[960px] my-40 bg-red-p  md:bg-opacity-0"
      >
        <div
          className={` h-full bg-red-p absolute top-0 left-0 -z-10 md:rounded-md shadow-[0_4px_6px_2px_rgb(0,0,0,0.3)] ez ${
            inView ? "w-full" : "md:w-[58%] lg:w-[550px]"
          } `}
        ></div>
        <div className="relative ">
          {/* image and bg box */}
          <img className="opacity-0 " src={item.image} alt="" />
          <img
            className="absolute md:px-4 -top-6  md:rounded-md border-red-p border-t-4 md:border-t-0"
            src={item.image}
            alt=""
          />
        </div>

        <div
          className={`text-grey-p text-3xl flex flex-col md:w-full justify-around font-bold items-center gap-6 ml-4 ez ${
            inView ? "md:text-grey-p" : "md:text-black-p"
          }`}
        >
          {/* title and description */}
          <h1 className="text-xl font-bold flex items-center  ">
            {item.title}{" "}
          </h1>
          <p className="text-lg font-bold pr-4">{item.description}</p>
          <div className="place-self-center  ">
            {/* buttons */}
            <a
              className="btn bg-red-p text-grey-p text-lg hover:bg-grey-p hover:text-black-p"
              href={item.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
            <a
              className="btn bg-black-p  text-grey-p text-lg hover:bg-grey-p hover:text-black-p"
              href={item.gitLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div>
            <p
              className={`py-2 text-xs font-bold flex items-center text-grey-p justify-around   divide-x-2`}
            >
              {/* <span>STACK:</span> */}
              {item.stack.map((item) => (
                <span className="px-2">{item}</span>
              ))}
              {/* <IoCaretForwardCircleSharp className="text-lg " /> */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
