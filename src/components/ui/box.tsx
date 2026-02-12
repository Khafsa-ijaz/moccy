import { IoClose } from "react-icons/io5";
import { jobsData } from "../api/jobs";
import { useState } from "react";
import { type CopyWritingStatus } from "../../types/job";
interface fun{
onclose:()=>void;
id:number;
 Changes:(jobId: number, status: CopyWritingStatus|string)=>void;
}
export function Box({onclose,id,Changes}:fun) {
    const [status, setstatus]=useState<CopyWritingStatus |string>();
    return (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center"
      onClick={(e) => e.stopPropagation()}>
             <div className="bg-stone-100  w-105 text-sm flex flex-col gap-3 rounded-lg overflow-hidden">
            <div className=" bg-white shadow-md  p-4 p rounded-t-r-2xl flex justify-between ">
                <h2 className="font-bold  text-xl">Change Status</h2>
                <button onClick={onclose}>< IoClose size={20} className="fill-neutral-300"/></button>
            </div>
            
            <div className=" m-3 p-2 rounded-lg bg-white flex flex-col gap-2 justify-center items-start w-100 h-25 ">
                <label className="font-semibold">Status</label>
                <div className="w-95 outline-none border-2 border-neutral-100 p-2 rounded-lg" >
                    <select className="outline-none justify-between w-full" onChange={(e)=>setstatus(e.target.value)} value={status}>
                     {   jobsData.map((job)=>(job.status)).filter((Jobstatus,index,array)=>(array.indexOf(Jobstatus)===index)).map((Jobstatus,index)=>(
                        <option key={index} >{Jobstatus}</option>
                     ))}
                    
                        {/* <option>Requested</option>
                        <option>Completed</option>
                        <option>Pending</option> */}
                    </select>
                </div>
                

            </div>
            <div className="w-100 flex gap-4 justify-end items-end leading-tight text-right p-2">
                    <button className="p-2 pl-4 rounded-lg text-[#4A154B] font-semibold">Cancel</button>
                    <button className="p-2 pl-4 pr-4 rounded-lg bg-[#4A154B] text-white font-semibold" onClick={()=>{Changes(id,status as CopyWritingStatus);onclose()}}>Save Changes</button>
                </div>
                
                
                

        </div>
        </div>
       
    )
}