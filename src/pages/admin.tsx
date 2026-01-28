import moccylogo from "../assets/images/logo.png";
import { RiMenuFold3Line } from "react-icons/ri";
import { IoMenuOutline } from "react-icons/io5";
import { Search } from "../components/ui/searchbox";
import { Avatar } from "../components/ui/avatar";
import { Header } from "../components/layouts/header";
import { Usenav } from "../components/context/navApi";
import { Table } from "../components/layouts/table";
import { BsThreeDotsVertical } from "react-icons/bs";
 
export function Admin() {
 
   const {menu,setmenu}=Usenav();
    return (
      
        <div className="flex">
            <aside className={`${menu?"w-70 bg-[#4A154B] min-h-screen text-white":"w-20 bg-[#4A154B]  min-h-145 text-white"} `}>
                <div className="flex items-center justify-between ">
                    <div>
                        <div className="flex items-center gap-0"><img src={moccylogo} alt='logo' className={`${menu?"w-25 h-23 object-contain relative":"hidden"}`} /><span className={`${menu?"text-3xl font-bold absolute left-20 font-[Quicksand]":"hidden"}`}>MOCCY</span></div>
                        <span className={`${menu?"text-xs font-semibold absolute top-16 left-40 font-[Quicksand]":" hidden"}`}>Admin</span>
                    </div>
                    <button onClick={()=>{setmenu(!menu)}} className={`${menu?"":"hidden"}`}>
                     <RiMenuFold3Line size={30} className="fill-white mr-2 mt-10"/>
                    </button>
                    <button onClick={()=>{setmenu(!menu)}} className={`${menu?"hidden":""}`}><IoMenuOutline size={33} className="fill-white mr-5 mt-8"/></button>

                </div>
                <div className="inline-flex justify-center items-center pl-6 pt-6">
                    
                        <Header/>
                   
                    </div>
            </aside>
            <main className="bg-white flex-1 h-full">
                <div className="shadow-md h-20 w-full bg-gray-50">
                    <div className="p-4 flex justify-between items-center text-center"><Search/>
                     <Avatar/>
                    </div>
                    
                </div>
                <div className=" flex flex-col  gap-2 shadow-sm h-22 p-5 mt-3"><span className="flex justify-between  "><h1 className="font-[Quicksand] font-semibold text-xl">Jobs(145)</h1>
                <button className="w-8 h-8 border drop-shadow-lg border-stone-200 inline-flex justify-center items-center rounded-sm">< BsThreeDotsVertical/></button></span> 
                <span>
                    <ul className="flex gap-6  text-neutral-500 font-medium">
                        <li>All</li> 
                        <li>Live</li>
                        <li>Pending</li>
                        <li>Closed</li>
                        <li>Scheduled</li>
                         <li>Failed</li>
                    </ul>
                </span>
                </div>

                <div className="ml-3 mr-2 mt-5 inline-flex justify-items-center"><Table/></div>
                
                
            </main>
        </div>
      
    )
}