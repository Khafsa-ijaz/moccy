import { MdArrowDropDown } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { type Job ,type CopyWritingStatus } from "../../types/job";
import { jobsData } from "../api/jobs"
import { Box } from "../ui/box";


export function Table() {
    const [modal, setmodal] = useState<number | null>(null);
    const [boxmodal, setboxmodal] = useState<number | null>(null);
    //    const [page, setpage]=useState<number>(1);
    // const [limit,setlimit]=useState<number>(6);
    // const [skip,setskip]=useState<number>(0);
    const [jobs,setJobs] = useState<Job[]>(jobsData);
    const handleChanges=(jobId:number,status:CopyWritingStatus)=>
    {
      setJobs(prev=>
            prev.map(job=>job.id===jobId
                ? {...job,status}
                :job)
        
      );
    };
    // useEffect(()=>{
    //     setskip((page-1)*limit);

    // },[page])
    // const handlefunction=()=>{
    //     setpage(page+1);
    // }

    return (
        <div className="overflow-x-auto  overflow-y-auto w-full rounded-lg overflow-hidden">
            <table className="table-fixed w-full border border-gray-200 border-collapse rounded-lg">
                <thead className="bg-stone-100 font-medium text-sm w-full">
                    <tr className="border-b border-gray-200 text-left border">
                        <th className="px-1 py-1"><span className="inline-flex justify-items-center items-center gap-1"><input type="checkbox" className="w-3 h-3" />Job id  <MdArrowDropDown /> </span></th>
                        <th className="px-1 py-1 "><span className="inline-flex justify-items-center items-center">Job Title<MdArrowDropDown /></span></th>
                        <th className="px-2 py-1"><span className="inline-flex justify-items-center items-center">Company <MdArrowDropDown /></span></th>
                        <th className="px-1 py-1"><span className="inline-flex justify-items-center items-center">Expirey date  <MdArrowDropDown /></span></th>
                        <th className="px-1 py-1 w-40"> <span className="inline-flex justify-items-center items-center">Reference number  <MdArrowDropDown /></span></th>
                        <th className="px-1 py-1 "><span className="inline-flex justify-items-center items-center">CopyWriting  <MdArrowDropDown /></span></th>
                        <th className="px-1 py-1"><span className="inline-flex justify-items-center items-center">Actions <MdArrowDropDown /></span></th>
                    </tr>
                </thead>
                <tbody className="relative">



                    {
                        jobs.map((newjob, index) => (
                            <tr className=" relative border-b border-gray-200 text-left text-sm font-medium text-neutral-500" key={index}>

                                <td className="px-1 py-3 "><span className="flex gap-1 items-center"><input type="checkbox" className="w-3 h-3" />{newjob.id}</span></td>
                                <td className="px-1 py-3">{newjob.title}</td>
                                <td className="px-2 py-3 ">{newjob.company}</td>
                                <td className="px-1 py-3">{newjob.expiry}</td>
                                <td className="px-1 py-3">{newjob.reference}</td>
                                    <td className="px-1 py-3">{newjob.status}</td>
                                <td className="px-1 py-3 "><span className="  inline-flex justify-items-center items-center gap-2 relative">
                                    {
                                        modal=== newjob.id && (<div className="bg-white absolute  top-4 right-7 rounded-lg shadow-2xl w-40 h-20 p-3 z-10">
                                            <ul className="flex flex-col gap-1"><li className="hover:bg-stone-100 p-1 rounded-lg"><button onClick={() => { setboxmodal(boxmodal === newjob.id ? null : newjob.id) }}>Change Status</button></li>
                                                <li className="hover:bg-stone-100 p-1 rounded-lg"><button>Delete Job</button></li>
                                            </ul>
                                        </div>)
                                    }
                                    <button onClick={() => { setmodal(modal === newjob.id ? null : newjob.id) }}><BsThreeDotsVertical /></button>
                                    <button><IoEyeOutline /></button>
                                </span></td>
                            </tr>
                        )

                        )

                    }
                    
                    {
                        boxmodal && <Box onclose={() => setboxmodal(null)} id={boxmodal} Changes={handleChanges}/>
                    }
                </tbody>


            </table>
        </div>
    )
}