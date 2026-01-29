import { SideBar } from "../components/layouts/SideBar";
import { Usenav } from "../components/context/navApi";
import { Search } from "../components/ui/searchbox";
import { Avatar } from "../components/ui/avatar";
import { Outlet } from "react-router-dom";
import { NavIcon } from "../components/layouts/navlogo";
import { Headers } from "../components/layouts/header";

export function Admin() {

const { menu} = Usenav();
    return (

        <div className="flex">
            <aside className={`${menu ? "w-70 " : "w-20"} bg-[#4A154B] min-h-screen text-white `}>
               <NavIcon/>
                <SideBar />
              
            </aside>
            <main className="bg-white flex-1 h-full">
                <Headers left={<Avatar />} right={<Search />}/>
               <Outlet/>
            </main>
        </div>

    )
}