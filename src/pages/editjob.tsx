import { JobCard } from "../components/ui/jobCard";

export function EditJob() {
    return (
        <div className="bg-stone-100">
            <div className=" bg-stone-50 font-[Quicksand] ">
                <div className=" flex justify-between mt-2 m-3 px-2 py-2">
                    <div className="flex flex-col items-start">
                        <h1 className="text-xl text-neutral-700 font-bold">Visual Designer</h1>
                        <p className="text-sm text-neutral-500 font-medium ">Edit the Necessary job details for your applicants</p>
                    </div>

                    <button className="bg-[#4A154B] textlg font-bold text-white px-2 py-1 rounded-md text-sm">Save Changes</button>

                </div>
            </div>
            {/* <div className="bg-white rounded-xl  px-5 py-5 m-3 flex flex-col gap-3">
                <h1 className="font-bold text-md">
                    Basic Information
                </h1>
                

                <div className="flex justify-between ">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-start"><span className="font-bold text-md">Job Type</span>
                        <span>permanent</span>
                    </div>
                    <div className="flex flex-col items-start"><span className="font-bold text-md">Application Start Date</span>
                        <span>21 sDecember 2022</span>
                    </div>

                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-start"><span className="font-bold">Category</span>
                        <span>Design & Engineering</span>
                    </div>
                    <div className="flex flex-col items-start"><span className="font-bold">Application End Date</span>
                        <span>21 October 2023</span>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-start"><span className="font-bold">Job Role</span>
                        <span>Entry level</span>
                    </div>
                    <div className="flex flex-col items-start"><span className="font-bold">No.of Position</span>
                        <span>4</span>
                    </div>
                </div>

                <div className="flex  flex-col gap-4">
                    <div className="flex flex-col items-start"><span className="font-bold">Employment Type</span>
                        <span>Full Time</span>
                    </div>
                    
                    <div className="flex flex-col items-start"><span className="font-bold">Remote</span>
                        <span>Fully Remote</span>
                    </div>
                </div>
                </div>


            </div> */}
            <JobCard />
        </div>
    )
}