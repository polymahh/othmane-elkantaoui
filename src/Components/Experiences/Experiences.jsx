import { IoSnow } from "react-icons/io5";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

const experienceList = [
  {
    image: [
      "seocomponent-desktop.png",
      "seocomponent-tablet.png",
      "seocomponent-mobile.png",
    ],
    title: "seocomponent.com",
    description:
      "seocomponent.com is a collection of all types of technical SEO elements for websites so developers spend more time designing and building websites ",
    whatiDid: [
      "Built new schema generators for various types of pages e.g.: Article, Event, Recipe, Job Posting and many more",
      "Optimized the code by creating new reusable components and tools so to make creation of new generators easier",
      "Establishing a new context to share states between components seamlessly",
    ],
    stack: ["Nextjs", "Typescript", "TailwindCss", "Context api"],
    status: "Freelance (2022-09/2022-11)",
    liveLink: "https://www.seocomponent.com/",
  },
  {
    image: [
      "datamine-desktop.png",
      "datamine-tablet.png",
      "datamine-mobile.png",
    ],
    title: "Data Mine",
    description:
      "Data mine is an open-source project to create a public facing directory website for Prifina dynamic data to easily find all types of data objects and attributes available for developers to create all kinds data apps.",
    whatiDid: [
      "Worked with a ui/ux designer to code the frontend of the project following figma designs using Reactjs and Chakra ui",
      "Connected the website to Prifina notion data-base through an express server and established the routing and a context to make calls to the api as needed ",
      "Coded the sorting by search or by categories or by status logic from scratch",
    ],
    stack: ["Nextjs", "Typescript", "TailwindCss", "Context api"],
    status: "OpenSource (2022-11 / present) in progress ...",
    liveLink: "http://data-mine.vercel.app/",
  },
];

export const Experiences = (props) => {
  return (
    <>
      <div
        ref={props.experiences}
        className="w-full pt-4 text-black-p flex flex-col items-center "
      >
        <IoSnow className="text-red-p mt-14 text-6xl" />
        <span className="text-4xl font-bold mt-4 ">Experience.</span>
        <span className=" text-xl  mt-4">Recent Work & Contributions.</span>
        <div>
          {experienceList.map((item) => (
            <ExperienceCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
