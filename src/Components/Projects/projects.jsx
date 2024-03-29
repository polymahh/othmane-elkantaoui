import { ProjectCard } from "./projectCard";
import { IoSnow } from "react-icons/io5";

const projectList = [
  {
    image: "yassmina-portfolio.webp",
    title: "Architect-Portfolio",
    description:
      "this was a fun project to create a portfolio with Nextjs 13 and contentful CMS , allowing the user to change his data from the CMS interface but keeping the website fast with Nextjs",
    stack: ["Nextjs", "Contentful", "React Query", "Framer Motion"],
    liveLink: "https://yassmina-portfolio.vercel.app/projects",
    gitLink: "https://github.com/polymahh/yassmina-portfolio",
  },
  {
    image: "rest-countries-api.webp",
    title: "Rest-Countries-api",
    description:
      "this is a challenge to create a website integrating the Rest Countries Api to show countries, following a design and implementing search and pagination features ",
    stack: ["Nextjs", "Typescript", "Context api", "TailwindCss"],
    liveLink: "http://rest-countries-api-polymahh.vercel.app/",
    gitLink: "https://github.com/polymahh/rest-countries-api",
  },
  {
    image: "url-shortening.webp",
    title: "url-shortening",
    description:
      "This is a Next js project for making a url shortner website using an Api and styled with TailwindCss",
    stack: ["Nextjs", "Typescript", "LocalStorage", "TailwindCss"],
    liveLink: "https://url-shortening-yzqm.vercel.app/",
    gitLink: "https://github.com/polymahh/url-shortening",
  },
  {
    image: "tubegiffer.webp",
    title: "TubeGiffer",
    description:
      "This was a fun personel project to create a tool that can help users create clips from youtube videos without downloading the video ",
    stack: ["Nodejs", "Express", "FFMPEG", "React", "Tailwind"],
    liveLink: "https://tubegiffer.vercel.app/",
    gitLink: "https://github.com/polymahh",
  },
  {
    image: "blogr-landing-page.webp",
    title: "Blogr landing page",
    description:
      "This was a challenge from Frontend Mentor to build a service landing page, using tailwindCss to style the project was very challenging ",
    stack: ["NextJs", "Typescript", "TailwindCss", "MobileFirst"],
    liveLink: "https://blogr-landing-page-ten-snowy.vercel.app/",
    gitLink: "https://github.com/polymahh/blogr-landing-page",
  },
  {
    image: "static-job-listings.webp",
    title: "Dynamic-job-listings",
    description:
      "This is a react project to make a jobs listing page with dynamic filtering through local data and using context api to handle global state ",
    stack: ["React", "ContextAPI", "CSS3"],
    liveLink: "https://static-job-listings-polymahh.vercel.app",
    gitLink: "https://github.com/polymahh/static-job-listings",
  },
  {
    image: "EcommercePage.jpg",
    title: "Ecommerce Product Page",
    description:
      "This was a challenge from Frontend Mentor to build an e-commerce product page using NextJs ",
    stack: ["NextJs", "CSS3", "ContextAPI"],
    liveLink: "https://ecommerce-product-page-blue.vercel.app/",
    gitLink: "https://github.com/polymahh/ecommerce-product-page",
  },
  {
    image: "Store-Page.webp",
    title: "Store Page",
    description:
      "This is a Next js project to make a page store with a dynamic cart, using TypeScrit redux and styled with TailwindCss",
    stack: ["React", "TypeScript", "Redux", "Tailwindcss"],
    liveLink: "https://nail-polish.vercel.app/",
    gitLink: "https://github.com/polymahh/nail-polish",
  },
  {
    image: "weather-app.webp",
    title: "Weather App",
    description:
      "A Weather App fetching daily, hourly and multiple cities weather data from an Api, the styling was done using tailwindcss",
    stack: ["Tailwindcss", "React", "Luxon"],
    liveLink: "https://polymahh.github.io/weather-app/",
    gitLink: "https://github.com/polymahh/weather-app",
  },
  // {
  //   image: "shopping-cart.webp",
  //   title: "Shopping Cart",
  //   description:
  //     "A shopping website utilizing react context and browser routing ",
  //   stack: ["React", "CSS3", "react-router-dom"],
  //   liveLink: "https://polymahh.github.io/shopping-cart",
  //   gitLink: "https://github.com/polymahh/shopping-cart",
  // },
  // {
  //   image: "admin-dashboard.png",
  //   title: "Admin Dashboard",
  //   description:
  //     "Admin dashboard design using Html and Css with a focus on grid layouts",
  //   stack: ["HTML5", "CSS3"],
  //   liveLink: "https://polymahh.github.io/Admin-Dashboard/",
  //   gitLink: "https://github.com/polymahh/Admin-Dashboard",
  // },
  {
    image: "movie-finder.webp",
    title: "Movie Finder",
    description:
      "This is a movie finder with the help www.omdbapi.com/ api and utlizing react-router-dom ",
    stack: ["React", "CSS3", "react-router-dom"],
    liveLink: "https://movie-finder-polymahh.vercel.app/",
    gitLink: "https://github.com/polymahh/MovieFinder",
  },
  {
    image: "library.webp",
    title: "Library",
    description:
      "A website where you can track your books read or soon to be read",
    stack: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "https://polymahh.github.io/Library/",
    gitLink: "https://github.com/polymahh/Library",
  },
];

export const Projects = (props) => {
  return (
    <>
      <div
        ref={props.projects}
        className="w-full pt-4 text-black-p flex flex-col items-center px-2"
      >
        <IoSnow className="text-red-p mt-14 text-6xl" />
        <span className="text-4xl font-bold mt-4 ">Portfolio.</span>
        <span className=" text-xl  mt-4">Favorite & Recent Projects.</span>
        <div>
          {projectList.map((item) => (
            <ProjectCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
