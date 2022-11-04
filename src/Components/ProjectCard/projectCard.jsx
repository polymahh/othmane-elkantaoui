import { InView, useInView } from "react-intersection-observer";

export const ProjectCard = ({ item }) => {
  const { ref, inView } = useInView({ rootMargin: "-300px 0px" });

  return (
    <>
      <div
        ref={ref}
        className="flex flex-col relative md:flex-row gap-6 lg:w-[976px] my-40 "
      >
        <div
          className={` h-full bg-red-p absolute top-0 -z-10 md:rounded-md shadow-[0_4px_6px_2px_rgb(0,0,0,0.3)] ez ${
            inView ? "w-full" : "md:w-[54%]"
          }`}
        ></div>
        <div className="relative">
          {/* image and bg box */}
          <img className="opacity-0 " src={item.image} alt="" />
          <img
            className="absolute md:px-4 -top-6 sm:w-fit md:rounded-md"
            src={item.image}
            alt=""
          />
        </div>

        <div
          className={`text-3xl flex flex-col justify-around font-bold items-center gap-2 ml-4 ez ${
            inView ? "text-grey-p" : "text-black-p"
          }`}
        >
          {/* title and description */}
          <h1 className="text-3xl font-bold flex items-center gap-2">
            {item.title}{" "}
          </h1>
          <p className="text-2xl font-bold">{item.description}</p>
          <div className="place-self-center">
            {/* buttons */}
            <a
              className="btn bg-red-p text-grey-p  hover:bg-grey-p hover:text-black-p"
              href={item.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              className="btn bg-black-p text-grey-p hover:bg-grey-p hover:text-black-p"
              href={item.gitLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className={inView ? "opacity-100 ez" : "opacity-0 ez"}>
            <p className="py-2 text-sm font-bold flex text-grey-p justify-around">
              {item.stack.map((item) => (
                <span>{item}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
