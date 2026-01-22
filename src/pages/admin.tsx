import moccylogo from "../assets/images/logo.png";
import { RiMenuFold3Line } from "react-icons/ri";
import { Search } from "../components/ui/searchbox";
export function Admin() {
    return (
        <div className="flex">
            <aside className="bg-blue-950 w-70 min-h-145 text-white">
                <div className="flex items-center justify-between ">
                    <div>
                        <div className="flex items-center gap-0"><img src={moccylogo} alt='logo' className="w-25 h-25 object-contain relative" /><span className="text-3xl font-bold absolute left-20">MOCCY</span></div>
                        <span className="text-xs font-medium absolute top-17 left-40">Admin</span>
                    </div>
                    <div>
                        <RiMenuFold3Line size={30} className="fill-white mr-2"/>
                    </div>

                </div>
            </aside>
            <main className="bg-white flex-1 h-full p-4">
                <Search/>
            </main>
        </div>
    )
}