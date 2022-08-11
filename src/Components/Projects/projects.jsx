
import { ProjectCard } from "../ProjectCard/projectCard"

const projectList =[
    {
        image:'rock-paper-sisor.png',
        title:'Rock Paper Sisor',
        description:'a basic Game of rock paper sisor against randomly chosen choices by the computer',
        stack:'HTML5, CSS3, JavaScript',
        liveLink:'https://polymahh.github.io/rock-paper-sisor/',
        gitLink:'https://github.com/polymahh/rock-paper-sisor',
    },
    {
        image:'library.png',
        title:'Library',
        description:'a website where you can track your books read or soon to be read utilising local Storage to store your data even if you close the browser',
        stack:'HTML5, CSS3, JavaScript',
        liveLink:'https://polymahh.github.io/rock-paper-sisor/',
        gitLink:'https://github.com/polymahh/rock-paper-sisor',
    },
    {
        image:'admin-dashboard.png',
        title:'Admin Dashboard',
        description:'Admin dashboard design using Html and Css with a focus on grid layouts',
        stack:'HTML5, CSS3, JavaScript',
        liveLink:'https://polymahh.github.io/Admin-Dashboard/',
        gitLink:'https://github.com/polymahh/Admin-Dashboard',
    }
]

export const Projects = ()=> {
    return (
    <>
    <div className="w-full pt-4 text-black-p flex flex-col items-center">
        <span className="text-4xl font-bold ">PROJECTS</span>
        <div>
            {projectList.map(item => <ProjectCard item={item}/>)}
            
        </div>
    </div>
    </>
    )
}