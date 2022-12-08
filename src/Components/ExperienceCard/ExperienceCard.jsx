import { IoCheckmarkCircle } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

const ExperienceCard = ({ item }) => {
  const { ref, inView } = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  return (
    <div className=" grid  md:grid-cols-2 gap-8 relative lg:w-[976px] my-40 px-4 md:px-12 ">
      <div className="flex flex-col  gap-8">
        <span className="text-4xl font-bold">{item.title}</span>

        <div>
          <p className="text-lg font-bold  ">{item.description}</p>
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
                  <IoCheckmarkCircle className="absolute top-5 left-0 text-red-p" />
                  {text}
                </span>
              </>
            ))}
          </ul>
        </div>
      </div>

      <div className=" flex flex-wrap place-self-center  gap-2 sm:w-3/4 md:w-full">
        <span className="text-md text-red-p ">{item.status}</span>

        {/* images */}
        <div>
          <img
            className={`mg: max-h-[50vh] delay-100 ease-in  duration-500 ${
              inView ? "translate-x-0 " : "translate-x-36 opacity-0"
            }  `}
            src={item.image[0]}
            alt=""
          />
        </div>
        <div className="flex gap-2">
          <div>
            <img
              className={`min-w-2/3 delay-100 ease-in  duration-500 ${
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
