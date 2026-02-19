import { useState } from "react"
import { details } from "../api/jobs"
export function JobDetails()
{
    const [data]=useState(details)
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
                        <span className="font-medium text-sm">{info.departments}</span>
                    </div>
                  

                </div>
                <div className="flex  flex-col gap-4">
                    <div className="flex gap-1  flex-col items-start"><span className="font-bold text-sm">Category</span>
                        <span className="font-medium text-sm">{info.positiontype}</span>
                    </div>
                  
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex  gap-1  flex-col items-start"><span className="font-bold text-sm">Job Role</span>
                        <span className="font-medium text-sm">{info.keyword}</span>
                    </div>
                   
                </div>

                <div className="flex  flex-col gap-4">
                    <div className="flex gap-1  flex-col items-start"><span className="font-bold text-sm">Employment Type</span>
                        <span className="font-medium text-sm">{info.pay}</span>
                    </div>
                  
                </div>
                </div>


            </div>)
        )}
    </div>
    )
   
}