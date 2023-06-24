import { IoCheckmarkCircle } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

const ExperienceCard = ({ item }) => {
  const { ref, inView } = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  return (
    <div className=" grid  md:grid-cols-2 gap-8 relative lg:w-[976px] my-20 px-4 md:px-12 overflow-hidden ">
      <div className="flex flex-col gap-8">
        <a
          href={item.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl font-bold hover:text-red-p"
        >
          {item.title}
        </a>

        <div>
          <p className="text-lg font-bold ">{item.description}</p>
        </div>

        <div className="relative">
          <span ref={ref} className={`text-2xl font-bold ez translate-y-30`}>
            What i did:
          </span>
          <ul className={` text-lg font-bold   `}>
            {item.whatiDid.map((text, idx) => (
              <>
                <span
                  className={`relative block  py-4 pl-8 delay-${
                    100 * idx
                  } ease-in  duration-500 ${
                    inView ? "translate-y-0 " : "translate-y-36 opacity-0"
                  } `}
                >
                  {" "}
                  <IoCheckmarkCircle className="absolute left-0 top-5 text-red-p" />
                  {text}
                </span>
              </>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col flex-wrap gap-2 md:flex-row place-self-center">
        <span
          className={`text-md text-red-p delay-100 ease-in duration-500 ${
            inView ? "translate-x-0 " : "translate-x-36 opacity-0"
          }`}
        >
          {item.status} test
        </span>

        {/* images */}
        <div>
          <img
            className={` max-h-[50vh] delay-100 ease-in  duration-500 ${
              inView ? "translate-x-0 " : "translate-x-36 opacity-0"
            }  `}
            src={item.image[0]}
            alt=""
          />
        </div>
        <div className="flex gap-2 max-w-[56.5vh]">
          <div>
            <img
              className={`min-w-2/3 delay-200 ease-in duration-500 ${
                inView ? "translate-x-0 " : "translate-x-36 opacity-0"
              } `}
              src={item.image[1]}
              alt=""
            />
          </div>
          <div>
            <img
              className={`min-w-1/3 delay-300 ease-in  duration-500 ${
                inView ? "translate-x-0 " : "translate-x-36 opacity-0"
              } `}
              src={item.image[2]}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExperienceCard;
