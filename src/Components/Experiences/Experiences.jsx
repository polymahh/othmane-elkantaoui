const experienceList = [
  {
    image: "rest-countries-api.jpg",
    title: "Rest-Countries-api",
    description:
      "This is a Next js project for making a url shortner website using an Api and styled with TailwindCss",
    stack: ["Nextjs", "Context api", "TailwindCss"],
    liveLink: "http://rest-countries-api-polymahh.vercel.app/",
    gitLink: "https://github.com/polymahh/rest-countries-api",
    style:
      "bg-red-p relative sm:w-3/4  place-self-center items-start  md:col-start-1 md:row-start-1 row-span-2",
  },
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
];

export const Experiences = (props) => {
  return (
    <>
      <div
        ref={props.projects}
        className="w-full pt-4 text-black-p flex flex-col items-center "
      >
        <span className=" text-grey-p text-4xl font-bold mt-14 px-8 py-2 bg-black-p rounded-lg">
          Experiences.
        </span>
        <div></div>
      </div>
    </>
  );
};
