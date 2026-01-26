import { HiOutlineRectangleGroup,HiOutlineCube  } from "react-icons/hi2";
import { PiBuildingApartmentLight, PiSuitcaseSimple,PiSpeakerSimpleNone  } from "react-icons/pi";
import { AiOutlineSetting } from "react-icons/ai";
import { VscNote } from "react-icons/vsc";
import { Usenav } from "../context/navApi";

export function Header()
{
    const {menu}=Usenav();
    
    return(
        <>
        <div>
            <ul className={`${menu?"flex flex-col gap-4 items-start text-white font-sans":"items-center flex flex-col gap-4  text-white font-sans"}`}>
                <li className="flex gap-3 justify-center items-center cursor-pointer hover:font-bold group"><span><HiOutlineRectangleGroup size={`${menu?25:28}`} className="font-bold  group-hover:scale-110 group-hover:fill-white"/></span><a className={`${menu ? "text-md font-[Quicksand]":"hidden"}`}>Dashboard</a></li>
                <li className="flex gap-3 justify-center items-center cursor-pointer hover:font-bold group"><span>< PiBuildingApartmentLight size={`${menu?25:28}`} className="font-bold group-hover:scale-110 group-hover:fill-white"/></span><a className={`${menu ? "text-md font-[Quicksand] ":"hidden "}`}>Components</a></li>
                <li className="flex gap-3 justify-center items-center cursor-pointer hover:font-bold group"><span>< PiSuitcaseSimple size={`${menu?25:28}`} className="font-bold group-hover:scale-110 group-hover:fill-white"/></span><a className={`${menu ? "text-md":"hidden"}`}>Jobs</a></li>
                <li className="flex gap-3 justify-center items-center cursor-pointer hover:font-bold group"><span>< HiOutlineCube size={`${menu?25:28}`} className="font-bold group-hover:scale-110 group-hover:fill-white"/></span><a className={`${menu ? "text-md":"hidden"}`}>Products</a></li>
                <li className="flex gap-3 justify-center items-center cursor-pointer hover:font-bold group"><span><VscNote size={`${menu?25:28}`} className="font-bold group-hover:scale-110 group-hover:fill-white"/></span><a className={`${menu ? "text-md":"hidden"}`}>Licences</a></li>
                <li className="flex gap-3 justify-center items-center cursor-pointer hover:font-bold group"><span><PiSpeakerSimpleNone size={`${menu?25:28}`} className="font-bold group-hover:scale-110 group-hover:fill-white"/></span><a className={`${menu ? "text-md":"hidden"}`}>Compaigns</a></li>
                <li className="flex gap-3 justify-center items-center cursor-pointer hover:font-bold group"><span><AiOutlineSetting size={`${menu?25:28}`} className="font-bold group-hover:scale-110 group-hover:fill-white"/></span><a className={`${menu ? "text-md":"hidden"}`}>Settings</a></li>
            </ul>
        </div>
        </>
    )
}