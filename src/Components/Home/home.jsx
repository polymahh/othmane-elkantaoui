import { useRef } from "react"
import { About } from "../About/about"
import { Contact } from "../Contact/contact"
import { Footer } from "../Footer/footer"
import { Header } from "../Header/header"
import { Projects } from "../Projects/projects"
const Home = ()=> {

    const contact = useRef()
    const about = useRef()
    const projects = useRef()

    const ScrollDown = (ref)=>{
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth",
        })
    }
    return (<>

    <div className="flex flex-col lg:items-center m-auto ">
    <Header ScrollDown ={ScrollDown} contactRef={contact} projects={projects} about={about}/>
    <About about={about} ScrollDown ={ScrollDown} contactRef={contact} projects={projects}/>
    <Projects projects={projects}/>
    <Contact contactRef ={contact}/>
    <Footer/>
    </div>
    
    </>)
}

export default Home