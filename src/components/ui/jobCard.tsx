import { useState } from "react"
import { basicinfo } from "../api/jobs"
export function JobCard()
{
    const [data]=useState(basicinfo)
    return(
    <div>
       { data.map((info,index)=>(
         <div className="bg-white rounded-xl  px-5 py-5 m-3 flex flex-col gap-3" key={index}>
                <h1 className="font-bold text-md text-neutral-950">
                    {info.heading}
                </h1>
                

                <div className="flex justify-between text-neutral-900 font-[Quicksand]">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-1  flex-col items-start"><span className="font-bold text-sm">Job Type</span>
                        <span className="font-medium text-sm">{info.jobType}</span>
                    </div>
                    <div className="flex gap-1 flex-col items-start"><span className="font-bold text-sm">Application Start Date</span>
                        <span className="font-medium text-sm">{info.applicationStartDate}</span>
                    </div>

                </div>
                <div className="flex  flex-col gap-4">
                    <div className="flex gap-1  flex-col items-start"><span className="font-bold text-sm">Category</span>
                        <span className="font-medium text-sm">{info.jobcategory}</span>
                    </div>
                    <div className="flex gap-1  flex-col items-start"><span className="font-bold text-sm">Application End Date</span>
                        <span className="font-medium text-sm">{info.appEndDate}</span>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex  gap-1  flex-col items-start"><span className="font-bold text-sm">Job Role</span>
                        <span className="font-medium text-sm">{info.jobrole}</span>
                    </div>
                    <div className="flex gap-1  flex-col items-start"><span className="font-bold text-sm">No.of Position</span>
                        <span className="font-medium text-sm">{info.postions}</span>
                    </div>
                </div>

                <div className="flex  flex-col gap-4">
                    <div className="flex gap-1  flex-col items-start"><span className="font-bold text-sm">Employment Type</span>
                        <span className="font-medium text-sm">{info.employmentType}</span>
                    </div>
                    
                    <div className="flex gap-1  flex-col items-start"><span className="font-bold text-sm">Remote</span>
                        <span className=" font-medium text-sm">{info.remote}</span>
                    </div>
                </div>
                </div>


            </div>)
        )}
    </div>
    )
   
}