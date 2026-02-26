import { SideBar } from "../components/layouts/SideBar";
import { Usenav } from "../components/context/navApi";
import { Search } from "../components/ui/searchbox";
import { Avatar } from "../components/ui/avatar";
import { Outlet } from "react-router-dom";
import { NavIcon } from "../components/layouts/navlogo";
import { Headers } from "../components/layouts/header";
import { FiSearch } from "react-icons/fi";
import { LuCommand } from "react-icons/lu";

export function Admin() {

const { menu} = Usenav();
    return (

        <div className="flex h-screen overflow-hidden">
            <aside className={`${menu ? "w-60 " : "w-20"} bg-[#4A154B] min-h-screen text-white `}>
               <NavIcon/>
                <SideBar />
              
            </aside>
            <main className="bg-white flex-1 flex flex-col overflow-hidden">
                <Headers left={<Avatar />} right={<Search iconp={<FiSearch size={19} className=" text-neutral-400 absolute top-2 left-2  " />} icon2={<LuCommand />} txt="F" placeholder="Search or type a command "/>}/>
               {/* <Outlet/>*/}
  <div className="flex-1 overflow-auto">
    <Outlet />
  </div>

  <footer className="p-0 text-center text-sm text-gray-500 border-t border-gray-200">
  
  </footer>
            </main>
            
           
        </div>

    )
}