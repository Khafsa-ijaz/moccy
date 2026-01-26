import { FiSearch } from "react-icons/fi";
import { LuCommand } from "react-icons/lu";
export function Search() {
    return (
        <div className="relative font-[Quicksand]"><input type="text"
            placeholder="Search or type a command here" className=" border borer-2 border-neutral-100 h-8 w-90 rounded-sm pl-10 text-[#767476] bg-neutral-200 outline-none focus:ring-1 focus:ring-neutral-300" /><FiSearch size={22} className=" text-neutral-400 absolute top-1 left-2  " /><div className="bg-neutral-100 rounded-sm h-6 w-10 absolute top-1 right-2 inline-flex justify-items-center items-center gap-2 font-semibold p-1 font-[Quicksand]"><LuCommand/>F</div></div>
    )
}