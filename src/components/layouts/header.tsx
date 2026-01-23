import { HiOutlineRectangleGroup } from "react-icons/hi2";
export function Header()
{
    return(
        <>
        <div>
            <ul className="flex flex-col gap-2  text-white font-sans">
                <li className="flex gap-3 justify-center items-center cursor-pointer"><span><HiOutlineRectangleGroup size={25} className="font-bold"/></span><a className="text-md">Dashboard</a></li>
                <li><a>Components</a></li>
                <li><a>Jobs</a></li>
                <li><a>Products</a></li>
                <li><a>Licences</a></li>
                <li><a>Compaigns</a></li>
                <li><a>Settings</a></li>
            </ul>
        </div>
        </>
    )
}