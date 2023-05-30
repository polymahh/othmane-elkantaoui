import { IoSnow } from "react-icons/io5";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

const experienceList = [
  {
    image: [
      "3wm-desktop.png",
    ],
    title: "3WM Maroc",
    description:
      "Working as a Frontend developer creating and integrating new pages and new features with html CSS and JavaScript/jQuery",
      whatiDid: [
        "Developing new pages and optimizing existing code by refactoring and debugging.",
        "Quickly learning new and old technologies to adapt to the company's needs (jQuery, bootstrap, twig...) ",
        "Working closely with the team to ensure the timely achievement of company objectives.",
      ],
    stack: ["Html5", "Css3", "JavaScript", "jQuery", "Bootstrap","Twig"],
    status: "Freelance (2023-02/2022-05)",
    liveLink: "https://www.3wmedia.ma/",
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
      "Worked with a UI/UX designer to code the frontend of the project following Figma designs using Next.js and Chakra UI.",
      "Connected the website to the Prifina Notion database and made the website statically generated with a revalidation of 24 hours.",
      "This method makes the website very fast and also does not hit the API limit set by the Notion database, basically fetching the data once every day.",
      "Coded the sorting logic by search, categories, or status from scratch.",
    ],
    stack: ["Reactjs", "Typescript", "Chakra UI", "Notion", "Express.js"],
    status: "Internship (2022-11 / 2023-02)",
    liveLink: "https://data-mine-next.vercel.app/",
  },
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
