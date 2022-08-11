import { IoSnow } from "react-icons/io5";

export const ProjectCard = ({item})=>{

    
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-[976px] my-20 bg-black-p text-grey-p">
             <div className=" p-4 flex flex-col gap-3 justify-between">
                <h1 className="text-3xl font-bold flex items-center gap-2"><IoSnow className="text-sm text-red-p"/>{item.title}</h1>
                <p className="text-xl font-bold">{item.description}</p>
                <p className="text-xl font-bold">{item.stack}</p>
            </div>
            <div className="bg-red-p relative sm:w-3/4 w:4/5 place-self-center items-start md:row-span-2">
                <img className="opacity-0" src={require(`../Assets/${item.image}`)} alt="" />
                <img className="absolute bottom-4 right-4 sm:w-fit" src={require(`../Assets/${item.image}`)} alt="" />
            </div>
            <div className="place-self-center">
                <a className="btn bg-red-p text-grey-p  hover:bg-grey-p hover:text-black-p" href={item.liveLink}>Live Demo</a>
                <a className="btn bg-black-p text-grey-p hover:bg-grey-p hover:text-black-p" href={item.gitLink}>GitHub</a>
            </div>
        </div>
       
        </>
    )
}