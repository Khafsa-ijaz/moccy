import { RiArrowDropDownLine } from "react-icons/ri";
import mylogo from "../../assets/images/logo.png";
export function Avatar() {
    return (
        <div className="flex justify-center items-center gap-1">
            <div className="h-12 w-12 rounded-full bg-[#4A154B] overflow-hidden"><img src={mylogo} alt="avtarlogo" className="h-12 w-12 object-fill"/></div>
        <span className="inline-flex text-sm justify-items-center items-center font-[Quicksand] font-semibold">Admin<RiArrowDropDownLine size={25}/></span>
        </div>

    )
}