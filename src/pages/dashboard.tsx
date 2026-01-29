// import { Headers } from "../components/layouts/header"
import { Table } from "../components/layouts/table";
import { BsThreeDotsVertical } from "react-icons/bs";
// import { Button } from "../components/ui/button";
export function Dashboard()
{
    return(
        <div >
             
                <div className=" flex flex-col  gap-2 shadow-sm h-22 p-5 mt-3"><span className="flex justify-between  "><h1 className="font-[Quicksand] font-semibold text-xl">Jobs(145)</h1>
                    <button className="w-8 h-8 border drop-shadow-lg border-stone-200 inline-flex justify-center items-center rounded-sm">< BsThreeDotsVertical /></button></span>
                    <span>
                        <ul className="flex gap-6  text-neutral-500 font-medium">
                            <li>All</li>
                            <li>Live</li>
                            <li>Pending</li>
                            <li>Closed</li>
                            <li>Scheduled</li>
                            <li>Failed</li>
                        </ul>
                    </span>
                </div>
                {/* <Headers right="jobs(145)" left={<Button left={< BsThreeDotsVertical />}/>}/> */}
               

                <div className="ml-3 mr-2 mt-5 inline-flex justify-items-center"><Table /></div>
        </div>
    )
}