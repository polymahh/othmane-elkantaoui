import { IoSnow } from "react-icons/io5";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

const experienceList = [
  // {
  //   image: "rest-countries-api.jpg",
  //   title: "seocomponent.com",
  //   description:
  //     "seocomponent.com is a collection of all types oftechnical seo elements for websites so developers sped more time designing and building ",
  //   whatiDid: [
  //     "Built new schema generators for various types of pages e.g.: Article,Event, Recipe , Job Posting …",
  //     "Optimized the code by creating new reusable components and tools so to make creation of new generators easier",
  //     "Establishing a new context to share states between components seamlessly",
  //   ],
  //   stack: ["Nextjs", "Typescript", "TailwindCss", "Context api"],
  //   status: "Freelance (2022-09/2022-11)",
  //   liveLink: "https://www.seocomponent.com/",
  // },
  {
    image: [
      "datamine-desktop.png",
      "datamine-tablet.png",
      "datamine-mobile.png",
    ],
    title: "Data Mine",
    description:
      "Data mine is an open source project to create a public facing directory website for Prifina dynamic data to easily find all types of data objects and attributes available for the development of user-held data apps.",
    whatiDid: [
      "Worked with a ui/ux designer to make the frontend of theproject following figma designs",
      "Connected the website to Prifina notion data-base through an express server and established the routing and a context to make calls to the api only if needed ",
      "Coded the sorting by search or by categories or by status logic from scratch",
    ],
    stack: ["Nextjs", "Typescript", "TailwindCss", "Context api"],
    status: "OpenSource (in Progress 2022-11 / present)",
    liveLink: "http://data-mine.vercel.app/",
  },
];

export const Experiences = (props) => {
  return (
    <>
      <div
        ref={props.projects}
        className="w-full pt-4 text-black-p flex flex-col items-center "
      >
        <IoSnow className="text-red-p mt-14 text-6xl" />
        <span className="text-6xl font-bold mt-4 ">Experience.</span>
        <span className=" text-2xl  mt-4">Recent Clients & Contributions.</span>
        <div>
          {experienceList.map((item) => (
            <ExperienceCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
