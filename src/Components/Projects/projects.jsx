import { ProjectCard } from "../ProjectCard/projectCard";

const projectList = [
  {
    image: "url-shortening.png",
    title: "url-shortening",
    description:
      "This is a Next js project for making a url shortner website using an Api and styled with TailwindCss",
    stack: ["Nextjs", "LocalStorage", "TailwindCss"],
    liveLink: "https://url-shortening-yzqm.vercel.app/",
    gitLink: "https://github.com/polymahh/url-shortening",
    style:
      "bg-red-p relative sm:w-3/4 w:4/5 place-self-center items-start row-span-2",
  },
  {
    image: "blogr-landing-page.png",
    title: "Blogr landing page",
    description:
      "This was a challenge from Frontend Mentor to build a service landing page, using tailwindCss to style the project was very challenging ",
    stack: ["NextJs", "MobileFirst", "TailwindCss"],
    liveLink: "https://blogr-landing-page-ten-snowy.vercel.app/",
    gitLink: "https://github.com/polymahh/blogr-landing-page",
    style:
      "bg-red-p relative sm:w-3/4 w:4/5 place-self-center items-start  md:col-start-1 md:row-start-1 row-span-2",
  },
  {
    image: "static-job-listings.jpg",
    title: "Dynamic-job-listings",
    description:
      "This is a react project to make a jobs listing page with dynamic filtering through local data and using context api to handle global state ",
    stack: ["JavaScript", "ContextAPI", "CSS3"],
    liveLink: "https://static-job-listings-polymahh.vercel.app",
    gitLink: "https://github.com/polymahh/static-job-listings",
    style:
      "bg-red-p relative sm:w-3/4 w:4/5 place-self-center items-start row-span-2",
  },
  {
    image: "EcommercePage.jpg",
    title: "Ecommerce Product Page",
    description:
      "This was a challenge from Frontend Mentor to build an e-commerce product page using NextJs ",
    stack: ["NextJs", "CSS3", "ContextAPI"],
    liveLink: "https://ecommerce-product-page-blue.vercel.app/",
    gitLink: "https://github.com/polymahh/ecommerce-product-page",
    style:
      "bg-red-p relative sm:w-3/4 w:4/5 place-self-center items-start  md:col-start-1 md:row-start-1 row-span-2",
  },
  {
    image: "Store-Page.png",
    title: "Store Page",
    description:
      "This is a Next js project to make a page store with a dynamic cart, using TypeScrit redux and styled with TailwindCss",
    stack: ["TypeScript", "Redux", "Tailwindcss"],
    liveLink: "https://nail-polish.vercel.app/",
    gitLink: "https://github.com/polymahh/nail-polish",
    style:
      "bg-red-p relative sm:w-3/4 w:4/5 place-self-center items-start row-span-2",
  },
  {
    image: "weather-app.png",
    title: "Weather App",
    description:
      "A Weather App fetching daily, hourly and multiple cities weather data from an Api, the styling was done using tailwindcss",
    stack: ["Tailwindcss", "React", "Luxon"],
    liveLink: "https://polymahh.github.io/weather-app/",
    gitLink: "https://github.com/polymahh/weather-app",
    style:
      "bg-red-p relative sm:w-3/4 w:4/5 place-self-center items-start  md:col-start-1 md:row-start-1 row-span-2",
  },
  {
    image: "shopping-cart.png",
    title: "Shopping Cart",
    description:
      "A shopping website utilizing react context and browser routing ",
    stack: ["React", "CSS3", "react-router-dom"],
    liveLink: "https://polymahh.github.io/shopping-cart",
    gitLink: "https://github.com/polymahh/shopping-cart",
    style:
      "bg-red-p relative sm:w-3/4 w:4/5 place-self-center items-start row-span-2",
  },
  {
    image: "admin-dashboard.png",
    title: "Admin Dashboard",
    description:
      "Admin dashboard design using Html and Css with a focus on grid layouts",
    stack: ["HTML5", "CSS3"],
    liveLink: "https://polymahh.github.io/Admin-Dashboard/",
    gitLink: "https://github.com/polymahh/Admin-Dashboard",
    style:
      "bg-red-p relative sm:w-3/4 w:4/5 place-self-center items-start  md:col-start-1 md:row-start-1 row-span-2",
  },
  {
    image: "movie-finder.png",
    title: "Movie Finder",
    description:
      "This is a movie finder with the help www.omdbapi.com/ api and utlizing react-router-dom ",
    stack: ["React", "CSS3", "react-router-dom"],
    liveLink: "https://polymahh.github.io/MovieFinder/",
    gitLink: "https://github.com/polymahh/MovieFinder",
    style:
      "bg-red-p relative sm:w-3/4 w:4/5 place-self-center items-start row-span-2",
  },
  {
    image: "library.png",
    title: "Library",
    description:
      "A website where you can track your books read or soon to be read",
    stack: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "https://polymahh.github.io/Library/",
    gitLink: "https://github.com/polymahh/Library",
    style:
      "bg-red-p relative sm:w-3/4 w:4/5 place-self-center items-start  md:col-start-1 md:row-start-1 row-span-2",
  },
];

export const Projects = (props) => {
  return (
    <>
      <div
        ref={props.projects}
        className="w-full pt-4 text-black-p flex flex-col items-center"
      >
        {/* <span className="text-4xl font-bold ">PROJECTS</span> */}
        <div>
          {projectList.map((item) => (
            <ProjectCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
