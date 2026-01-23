import { FiSearch } from "react-icons/fi";
export function Search()
{
    return(
        <div className="relative "><input type="text" placeholder="search or type a command here" className=" border borer-2 border-neutral-300 h-8 w-90 rounded-sm pl-10 bg-gray-50"/><FiSearch  size={22}  className=" text-neutral-500 absolute top-1 left-2 "/></div>
    )
}