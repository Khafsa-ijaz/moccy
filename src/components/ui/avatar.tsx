import { RiArrowDropDownLine } from "react-icons/ri";
import mylogo from "../../assets/images/logo.png";
export function Avatar() {
    return (
        <div className="flex justify-center items-center gap-1">
            <div className="h-12 w-12 rounded-full bg-blue-950 overflow-hidden"><img src={mylogo} alt="avtarlogo" className="h-12 w-12 object-fill"/></div>
        <span className="inline-flex text-sm justify-items-center items-center">Admin<RiArrowDropDownLine size={25}/></span>
        </div>

    )
}