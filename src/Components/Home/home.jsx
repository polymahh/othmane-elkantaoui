import { About } from "../About/about"
import { Footer } from "../Footer/footer"
import { Header } from "../Header/header"
import { Projects } from "../Projects/projects"
const Home = ()=> {
    return (<>

    <div className="flex flex-col lg:items-center m-auto ">
    <Header/>
    <About />
    <Projects/>
    <Footer/>
    </div>
    
    </>)
}

export default Home