import { Usenav } from "../context/navApi";
import { NavLink } from "react-router-dom";
import { Icon } from "../ui/icon";


export function SideBar() {
    const { menu } = Usenav();

    return (
        <div className="inline-flex justify-center items-center pt-8 pl-5">
            <div >
                <ul  className={`${menu?"flex flex-col gap-6 items-start text-white font-[Quicksand]":"items-center flex flex-col gap-6  text-white font-[Quicksand] font-medium"}`}>
                    <li><NavLink to="/" end className={({ isActive }) => `${isActive ? "font-bold text-2xl" : " text-[#CCB2C8] hover:font-bold"} flex gap-1 justify-center items-center cursor-pointer hover:font-bold group  `}><Icon name="dashboard" className="w-5 h-5" /><span className={`${menu ? "text-xs font-bold" : "hidden"}`}>Dashboard</span></NavLink></li>
                    <li><NavLink to="/companies" className={({ isActive }) => `${isActive ? "font-bold text-2xl" : "hover:font-bold text-[#CCB2C8] "} flex gap-1 justify-center items-center cursor-pointer hover:font-bold group`}><Icon name="companies" className="w-3 h-3" /><span className={`${menu ? "text-xs font-bold" : "hidden"}`}>Companies</span></NavLink></li>
                    <li><NavLink to="/jobs" className={({ isActive }) => `${isActive ? "font-bold text-2xl" : "hover:font-bold text-[#CCB2C8] "} flex gap-1 justify-center items-center cursor-pointer hover:font-bold group`}><Icon name="jobs" className="w-3 h-3" /><span className={`${menu ? "text-xs font-bold " : "hidden"}`}>Jobs</span></NavLink></li>
                    <li><NavLink to="/products" className={({ isActive }) => `${isActive ? "font-bold text-2xl" : "hover:font-bold text-[#CCB2C8] "} flex gap-1 justify-center items-center cursor-pointer hover:font-bold group`}><Icon name="products" className="w-3 h-3" /><span className={`${menu ? "text-xs font-bold" : "hidden"}`}>Products</span></NavLink></li>
                    <li><NavLink to="/licenses" className={({ isActive }) => `${isActive ? "font-bold text-2xl" : "hover:font-bold text-[#CCB2C8] "} flex gap-1 justify-center items-center cursor-pointer hover:font-bold group`}><Icon name="licenses" className="w-3 h-3" /><span className={`${menu ? "text-xs font-bold" : "hidden"}`}>Licenses</span></NavLink></li>
                    <li><NavLink to="/compaign" className={({ isActive }) => `${isActive ? "font-bold text-2xl" : "hover:font-bold text-[#CCB2C8] "} flex gap-1 justify-center items-center cursor-pointer hover:font-bold group`}><Icon name="compaign" className="w-3 h-3" /><span className={`${menu ? "text-xs font-bold" : "hidden"}`}>Compaigns</span></NavLink></li>
                    <li><NavLink to="/setting" className={({ isActive }) => `${isActive ? "font-bold text-2xl" : "hover:font-bold text-[#CCB2C8] "} flex gap-1 justify-center items-center cursor-pointer hover:font-bold group`}><Icon name="setting" className="w-3 h-3" /><span className={`${menu ? "text-xs font-bold" : "hidden"}`}>Settings</span></NavLink></li>


                </ul>
            </div>
        </div>
    )
}