
export const ProjectCard = ({item})=>{

    
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-[976px] my-40 ">
             <div className="text-3xl font-bold items-center gap-2 ml-4">
                <h1 className="text-3xl font-bold flex items-center gap-2">{item.title} </h1>
                <p className="text-2xl font-bold">{item.description}</p>
            </div>
            <div className={item.style}>
                <img className="opacity-0" src={require(`../Assets/${item.image}`)} alt="" />
                <img className="absolute bottom-6 sm:right-4 sm:w-fit" src={require(`../Assets/${item.image}`)} alt="" />
                <div >
                    <p className=" text-sm font-bold flex text-grey-p justify-around">
                    {item.stack.map(item => <span>
                         {item} 
                    </span>)}
                    </p>
                </div>
            </div>
            <div className="place-self-center">
                <a className="btn bg-red-p text-grey-p  hover:bg-grey-p hover:text-black-p" href={item.liveLink} target="_blank">Live Demo</a>
                <a className="btn bg-black-p text-grey-p hover:bg-grey-p hover:text-black-p" href={item.gitLink} target="_blank">GitHub</a>
            </div>
            
        </div>
       
        </>
    )
}