import { useState } from "react"
import { basicinfo } from "../api/jobs"
export function JobCard()
{
    const [data]=useState(basicinfo)
    return(
    <div>
       { data.map((info,index)=>(
         <div className="bg-white rounded-xl  px-5 py-5 m-3 flex flex-col gap-3" key={index}>
                <h1 className="font-bold text-md">
                    {info.heading}
                </h1>
                

                <div className="flex justify-between ">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-start"><span className="font-bold text-md">Job Type</span>
                        <span>{info.jobType}</span>
                    </div>
                    <div className="flex flex-col items-start"><span className="font-bold text-md">Application Start Date</span>
                        <span>{info.applicationStartDate}</span>
                    </div>

                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-start"><span className="font-bold">Category</span>
                        <span>{info.jobcategory}</span>
                    </div>
                    <div className="flex flex-col items-start"><span className="font-bold">Application End Date</span>
                        <span>{info.appEndDate}</span>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-start"><span className="font-bold">Job Role</span>
                        <span>{info.jobrole}</span>
                    </div>
                    <div className="flex flex-col items-start"><span className="font-bold">No.of Position</span>
                        <span>{info.postions}</span>
                    </div>
                </div>

                <div className="flex  flex-col gap-4">
                    <div className="flex flex-col items-start"><span className="font-bold">Employment Type</span>
                        <span>{info.employmentType}</span>
                    </div>
                    
                    <div className="flex flex-col items-start"><span className="font-bold">Remote</span>
                        <span>{info.remote}</span>
                    </div>
                </div>
                </div>


            </div>)
        )}
    </div>
    )
   
}