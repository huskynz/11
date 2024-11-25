import Links from "./Links"
const PeterImage = "https://serv.husky.nz/public/peter.png"

export default function MainPageCard(){
    return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 px-4 py-4 leading-10">
        <div className="p-4 w-full bg-fuchsia-900 rounded-xl row-span-3"><img src={PeterImage} width={280} height={280}/></div>
        <div className="p-4 w-full bg-fuchsia-800 rounded-xl col-span-4 font-bold text-3xl text-center items-center">
            <div> Hi There!</div>
            <hr className="h-1 bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
            <div className=" text-2xl">Im Peter, A Solutions Architect</div>    
        </div>
       
        <div className="p-4 w-full bg-fuchsia-700 rounded-xl row-span-2 col-span-2 text-center">
            <div className="text-2xl"><a href="/about"> About Me </a></div>            
            <div className=" text-2xl"><a href="/skills">My Skills / Timeline </a></div>
            <div className=" text-2xl"><a href="/projects">Projects</a></div> 
        </div>
        <div className="p-4 w-full bg-fuchsia-700 rounded-xl row-span-2 col-span-2 text-center">
            <Links />
        </div>
    </div>
        )
}