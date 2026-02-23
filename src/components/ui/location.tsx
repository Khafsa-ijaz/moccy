import { useState } from "react"
import { details } from "../api/jobs"
export function Location()
{
    const [data]=useState(details)
    return(
    <div>
       { data.map((info,index)=>(
         <div className="bg-white rounded-xl  px-8 py-5 m-3 flex flex-col gap-3" key={index}>
                <h1 className="font-bold text-md text-neutral-950">
                    Job Location
                </h1>
                <div className="flex flex-col gap-4  text-neutral-900 font-[Quicksand]">
                    <div className="flex gap-1  flex-col items-start rounded-lg bg-stone-100 p-2"><span className="font-bold text-sm">Location Address</span>
                        <span className="font-medium text-sm">{info.location}</span>
                    </div>
                </div>
            </div>)
        )}
    </div>
    )
   
}