import { IoSnow } from "react-icons/io5";

const Aboutme = (props) => {
  return (
    <div
      ref={props.about}
      className="w-full pt-4 text-black-p flex flex-col items-center "
    >
      <IoSnow className="text-red-p mt-14 text-6xl" />
      <span className="text-4xl font-bold mt-4 ">About me.</span>
      <span className=" text-xl  mt-4">a bit about me.</span>

      <div className="grid sm:grid-cols-2 relative md:flex-row gap-6 lg:w-[976px] my-20 bg-red-p  md:bg-opacity-0">
        <div className="text-4xl font-bold ">
          <p>
            My name is Othmane Elkantaoui a Frontend Developer from Morocco.
          </p>
          <div className=" mt-10 flex gap-6  text-red-p w-full">
            <span className="text-base">
              20+ Projects | Remote | Contract | Freelance
            </span>
          </div>
        </div>
        <div>
          <p className="text-2xl">
            I am a self-taught Frontend developer committed to the idea of
            life-long learning . As someone with a keen interest in tech and a
            knack for problem-solving, web development was an obvious path.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
