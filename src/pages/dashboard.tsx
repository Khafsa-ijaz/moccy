// import { Headers } from "../components/layouts/header"
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { Table } from "../components/layouts/table";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Search } from "../components/ui/searchbox";
import { CiFilter } from "react-icons/ci";
import { Button } from "../components/ui/button";
import { Button2 } from "../components/ui/button2";
import { GrDownload } from "react-icons/gr";
import { PiSquareSplitHorizontalFill } from "react-icons/pi";
// import { Button } from "../components/ui/button";
export function Dashboard() {
    return (
        <div >

            <div className=" flex flex-col  gap-2 shadow-sm h-22 p-5 mt-3"><span className="flex justify-between  "><h1 className="font-[Quicksand] font-semibold text-xl">Jobs(145)</h1>
                <button className="w-8 h-8 border drop-shadow-lg border-stone-200 inline-flex justify-center items-center rounded-sm">< BsThreeDotsVertical /></button></span>
                <span>
                    <ul className="flex gap-6  text-neutral-500 font-medium text-sm">
                        <li><NavLink to="/" className={
                            ({ isActive }) => `${isActive ? " text-md font-semibold decoration-2 decoration-black underline underline-offset-2" : ""}`
                        }>All</NavLink></li>
                        <li><NavLink to="/f" className={
                            ({ isActive }) => `${isActive ? "text-md font-semibold  decoration-2 decoration-black underline underline-[#fffff]" : ""}`
                        }>Live</NavLink></li>
                        <li><NavLink to="/products" className={
                            ({ isActive }) => `${isActive ? "text-md font-semibold  decoration-2 decoration-black underline underline-[#fffff]" : ""}`
                        } >Pending</NavLink></li>
                        <li><NavLink to="/settings" className={
                            ({ isActive }) => `${isActive ? "text-md font-semibold  decoration-2 decoration-black underline underline-[#fffff]" : ""}`
                        }>Closed</NavLink></li>
                        <li><NavLink to="/licenses" className={
                            ({ isActive }) => `${isActive ? "text-md font-semibold  decoration-2 decoration-black underline underline-[#fffff]" : ""}`
                        }>Scheduled</NavLink></li>
                        <li><NavLink to="/jobs" className={
                            ({ isActive }) => `${isActive ? "text-md font-semibold decoration-2 decoration-black underline underline-[#fffff]" : ""}`
                        }>Failed</NavLink></li>
                    </ul>
                </span>
            </div>
            {/* <Headers right="jobs(145)" left={<Button left={< BsThreeDotsVertical />}/>}/> */}

            <div className="m-2 flex justify-between ">
                <Search iconp={<FiSearch size={22} className=" text-neutral-400 absolute top-1 left-2  " />} />
                <span className="flex gap-2">
                     <Button left={<CiFilter />} text="Filter"/>
                <Button2 left={<CiFilter />} text={<PiSquareSplitHorizontalFill className=""/>} btn={<GrDownload className=""/>}/>
                </span>
               

            </div>



            <div className="ml-3 mr-2 mt-5 inline-flex justify-items-center"><Table />

            </div>
        </div>
    )
}