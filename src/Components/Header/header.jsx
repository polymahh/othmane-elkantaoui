import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoSnow } from "react-icons/io5";

export const Header = (props) => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);

  return (
    <div className=" overflow-hidden">
      <div className="flex justify-between bg-transparent items-center font-semibold lg:w-[976px]">
        <div className="text-4xl p-4 font-bold flex text-red-p gap-2 items-end">
          <IoSnow /> O.ELK
        </div>
        <div className="hidden sm:flex">
          <ul className="flex items-center text-xl pt-2 ">
            {/* <li>Home</li> */}
            <li onClick={() => props.ScrollDown(props.about)}>About</li>
            <li onClick={() => props.ScrollDown(props.projects)}>Portfolio</li>
            <li onClick={() => props.ScrollDown(props.experiences)}>
              Experiences
            </li>
          </ul>
        </div>
        <button
          className="hidden sm:block btn bg-red-p text-grey-p hover:bg-grey-p hover:text-black-p"
          onClick={() => props.ScrollDown(props.contactRef)}
        >
          Contact
        </button>
        <button className=" sm:hidden py-1 px-2" onClick={() => toggleMenu()}>
          <IoMenu className=" text-2xl" />
        </button>
      </div>

      <div
        className={`flex flex-col  bg-black-p text-grey-p absolute right-0 top-0 px-2  transition-all ease-in-out duration-300 w-full
        ${menu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-60"}`}
      >
        <ul className="flex flex-col items-center">
          <button
            className=" sm:hidden py-1 px-2 mx-1 self-end "
            onClick={() => toggleMenu()}
          >
            <span className="px-2 text-md">X</span>
          </button>
          {/* <li bg-black-p>Home</li> */}
          <li
            onClick={() => {
              props.ScrollDown(props.about);
              toggleMenu();
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              props.ScrollDown(props.projects);
              toggleMenu();
            }}
          >
            Projects
          </li>
          <button
            className="max-w-max text-base py-1"
            onClick={() => {
              props.ScrollDown(props.contactRef);
              toggleMenu();
            }}
          >
            Contact
          </button>
        </ul>
      </div>
    </div>
  );
};
