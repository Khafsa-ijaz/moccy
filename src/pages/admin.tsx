import moccylogo from "../assets/images/logo.png";
import { RiMenuFold3Line } from "react-icons/ri";
import { Search } from "../components/ui/searchbox";
import { Avatar } from "../components/ui/avatar";
import { Header } from "../components/layouts/header";
import { Usenav } from "../components/context/navApi";
 
export function Admin() {
 
   const {menu,setmenu}=Usenav();
    return (
      
        <div className="flex">
            <aside className={`${menu?"w-70 bg-blue-950  min-h-145 text-white":"w-20 bg-blue-950  min-h-145 text-white"} `}>
                <div className="flex items-center justify-between ">
                    <div>
                        <div className="flex items-center gap-0"><img src={moccylogo} alt='logo' className={`${menu?"w-25 h-23 object-contain relative":"hidden"}`} /><span className={`${menu?"text-3xl font-bold absolute left-20":"text-2xl pt-5 font-bold  hidden"}`}>MOCCY</span></div>
                        <span className={`${menu?"text-xs font-medium absolute top-16 left-40":" hidden text-sm font-medium absolute top-10 left-9"}`}>Admin</span>
                    </div>
                    <button onClick={()=>{setmenu(!menu)}} className={`${menu?"":"mr-5"}`}>
                        <RiMenuFold3Line size={`${menu?30:38}`} className="fill-white mr-2 mt-12"/>
                    </button>

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