import { HiOutlineRectangleGroup,HiOutlineCube  } from "react-icons/hi2";
import { PiBuildingApartmentLight, PiSuitcaseSimple,PiSpeakerSimpleNone  } from "react-icons/pi";
import { AiOutlineSetting } from "react-icons/ai";
import { TbLicense } from "react-icons/tb";
import { Usenav } from "../context/navApi";

export function Header()
{
    const {menu}=Usenav();
    
    return(
        <>
        <div>
            <ul className={`${menu?"flex flex-col gap-2 items-start text-white font-sans":"items-center flex flex-col gap-3  text-white font-sans"}`}>
                <li className="flex gap-3 justify-center items-center cursor-pointer"><span><HiOutlineRectangleGroup size={`${menu?25:33}`} className="font-bold"/></span><a className={`${menu ? "text-md":"hidden"}`}>Dashboard</a></li>
                <li className="flex gap-3 justify-center items-center cursor-pointer"><span>< PiBuildingApartmentLight size={`${menu?25:33}`} className="font-bold"/></span><a className={`${menu ? "text-md":"hidden"}`}>Components</a></li>
                <li className="flex gap-3 justify-center items-center cursor-pointer"><span>< PiSuitcaseSimple size={`${menu?25:33}`} className="font-bold text-center"/></span><a className={`${menu ? "text-md":"hidden"}`}>Jobs</a></li>
                <li className="flex gap-3 justify-center items-center cursor-pointer"><span>< HiOutlineCube size={`${menu?25:33}`} className="font-bold"/></span><a className={`${menu ? "text-md":"hidden"}`}>Products</a></li>
                <li className="flex gap-3 justify-center items-center cursor-pointer"><span><TbLicense size={`${menu?25:33}`} className="font-bold"/></span><a className={`${menu ? "text-md":"hidden"}`}>Licences</a></li>
                <li className="flex gap-3 justify-center items-center cursor-pointer"><span><PiSpeakerSimpleNone size={`${menu?25:33}`} className="font-bold"/></span><a className={`${menu ? "text-md":"hidden"}`}>Compaigns</a></li>
                <li className="flex gap-3 justify-center items-center cursor-pointer"><span><AiOutlineSetting size={`${menu?25:33}`} className="font-bold"/></span><a className={`${menu ? "text-md":"hidden"}`}>Settings</a></li>
            </ul>
        </div>
        </>
    )
}