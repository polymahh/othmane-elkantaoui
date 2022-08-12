
import { ProjectCard } from "../ProjectCard/projectCard"

const projectList =[
    {
        image:'rock-paper-sisor.png',
        title:'Rock Paper Sisor',
        description:'a basic Game of rock paper sisor against randomly chosen choices by the computer',
        stack:['HTML5', 'CSS3', 'JavaScript'],
        liveLink:'https://polymahh.github.io/rock-paper-sisor/',
        gitLink:'https://github.com/polymahh/rock-paper-sisor',
        style:"bg-red-p relative sm:w-3/4 w:4/5 place-self-center items-start  md:col-start-1 md:row-start-1 row-span-2"
    },
    {
        image:'library.png',
        title:'Library',
        description:'a website where you can track your books read or soon to be read',
        stack:['HTML5', 'CSS3', 'JavaScript'],
        liveLink:'https://polymahh.github.io/rock-paper-sisor/',
        gitLink:'https://github.com/polymahh/rock-paper-sisor',
        style:"bg-red-p relative sm:w-3/4 w:4/5 place-self-center items-start row-span-2"

    },
    {
        image:'admin-dashboard.png',
        title:'Admin Dashboard',
        description:'Admin dashboard design using Html and Css with a focus on grid layouts',
        stack:['HTML5', 'CSS3'],
        liveLink:'https://polymahh.github.io/Admin-Dashboard/',
        gitLink:'https://github.com/polymahh/Admin-Dashboard',
        style:"bg-red-p relative sm:w-3/4 w:4/5 place-self-center items-start  md:col-start-1 md:row-start-1 row-span-2"

    }
]

export const Projects = (props)=> {
    return (
    <>
    <div ref={props.projects} className="w-full pt-4 text-black-p flex flex-col items-center">
        {/* <span className="text-4xl font-bold ">PROJECTS</span> */}
        <div>
            {projectList.map(item => <ProjectCard item={item}/>)}
            
        </div>
    </div>
    </>
    )
}