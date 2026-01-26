import { FiSearch } from "react-icons/fi";
import { LuCommand } from "react-icons/lu";
export function Search() {
    return (
        <div className="relative "><input type="text"
            placeholder="search or type a command here" className=" border borer-2 border-neutral-200 h-8 w-90 rounded-sm pl-10 bg-gray-100" /><FiSearch size={22} className=" text-neutral-500 absolute top-1 left-2 " /><div className="bg-white rounded-sm h-6 w-10 absolute top-1 right-2 inline-flex justify-items-center items-center gap-2 font-semibold p-1"><LuCommand/>F</div></div>
    )
}