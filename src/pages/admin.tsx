import moccylogo from "../assets/images/logo.png";
import { RiMenuFold3Line } from "react-icons/ri";
import { IoMenuOutline } from "react-icons/io5";
import { Search } from "../components/ui/searchbox";
import { Avatar } from "../components/ui/avatar";
import { Header } from "../components/layouts/header";
import { Usenav } from "../components/context/navApi";
 
export function Admin() {
 
   const {menu,setmenu}=Usenav();
    return (
      
        <div className="flex">
            <aside className={`${menu?"w-70 bg-[#4A154B]  min-h-145 text-white":"w-20 bg-[#4A154B]  min-h-145 text-white"} `}>
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
                
            </main>
        </div>
      
    )
}