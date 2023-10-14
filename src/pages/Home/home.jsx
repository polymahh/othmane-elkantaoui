import { useRef } from "react";
import { About } from "../../Components/About/about";
import Aboutme from "../../Components/Aboutme/Aboutme";
import { Contact } from "../../Components/Contact/contact";
import { Experiences } from "../../Components/Experiences/Experiences";
import { Footer } from "../../Components/Footer/footer";
import { Header } from "../../Components/Header/header";
import { Projects } from "../../Components/Projects/projects";
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
      <div className="flex flex-col w-full m-auto lg:items-center ">
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
