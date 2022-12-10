import { useRef } from "react";
import { About } from "../About/about";
import Aboutme from "../Aboutme/Aboutme";
import { Contact } from "../Contact/contact";
import { Experiences } from "../Experiences/Experiences";
import { Footer } from "../Footer/footer";
import { Header } from "../Header/header";
import { Projects } from "../Projects/projects";
const Home = () => {
  const contact = useRef();
  const about = useRef();
  const projects = useRef();
  const experiences = useRef();

  const ScrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="flex flex-col w-full lg:items-center m-auto ">
        <Header
          ScrollDown={ScrollDown}
          contactRef={contact}
          projects={projects}
          about={about}
          experiences={experiences}
        />
        <About
          ScrollDown={ScrollDown}
          contactRef={contact}
          projects={projects}
        />
        <Aboutme about={about} />
        <Projects projects={projects} />
        <Experiences experiences={experiences} />
        <Contact contactRef={contact} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
