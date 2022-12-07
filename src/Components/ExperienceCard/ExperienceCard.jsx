import { IoCheckmarkCircle } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

const ExperienceCard = ({ item }) => {
  const { ref, inView } = useInView({
    rootMargin: "-100px 0px",
  });

  return (
    <div className="flex flex-col gap-4 relative  gap-6 lg:w-[976px] my-40 ">
      <span className="text-4xl font-bold">{item.title}</span>
      <div className=" min-w-1/2">
        <p className="text-xl font-bold">{item.description}</p>
      </div>
      <div className=" flex gap-2 px-4 ">
        {/* image and bg box */}
        <div>
          <img className=" object-contain " src={item.image[0]} alt="" />
        </div>
        <div>
          <img className={"object-contain  "} src={item.image[1]} alt="" />
        </div>
        <div>
          <img className={"object-contain "} src={item.image[2]} alt="" />
        </div>
      </div>
      <div className="relative">
        <span ref={ref} className={`text-2xl font-bold ez translate-y-30`}>
          What i did:
        </span>
        <ul
          className={` text-xl font-bold left-0  ez ${
            inView ? "translate-y-2 " : "-translate-y-90 opacity-0"
          } `}
        >
          {item.whatiDid.map((text) => (
            <>
              <span className=" relative block py-4 pl-8">
                {" "}
                <IoCheckmarkCircle className="absolute top-5 left-0 text-red-p" />
                {text}
              </span>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ExperienceCard;
