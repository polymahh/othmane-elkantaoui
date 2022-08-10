import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers"
import { IoLogoVimeo } from "react-icons/io5"
import { ProjectCard } from "../ProjectCard/projectCard"

const prjectList =[
    {
        image:'',
        title:'',
        description:'',
        stack:'',
        liveLink:'',
        gitLink:'',
    }
]

export const Projects = ()=> {
    return (
    <>
    <div className="w-full mt-4 text-black-p flex flex-col items-center">
        <span className="text-4xl font-bold ">PROJECTS</span>
        <div className="m-4">
        <span className="text-2xl font-semibold">BASIC</span>
            <ProjectCard/>
        </div>
    </div>
    </>
    )
}