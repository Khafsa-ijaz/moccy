import Editor from "../components/ui/editor";
import { JobCard } from "../components/ui/jobCard";
import { JobDetails } from "../components/ui/jobdetail";
import { Location } from "../components/ui/location";

export function EditJob() {
    return (
        <div className="h-screen overflow-auto">
   <div className="bg-stone-100  ">
            <div className=" bg-stone-50 font-[Quicksand] ">
                <div className=" flex justify-between mt-2 m-3 px-2 py-2">
                    <div className="flex flex-col items-start">
                        <h1 className="text-xl text-neutral-900 font-bold">Visual Designer</h1>
                        <p className="text-sm text-neutral-500 font-medium ">Edit the Necessary job details for your applicants</p>
                    </div>

                    <button className="bg-[#4A154B] textlg font-bold text-white px-2 py-1 rounded-md text-sm">Save Changes</button>

                </div>
            </div>
            <JobCard />
            <JobDetails/>
            <Location/>
            <Editor prop="About Company"/>

            <Editor prop="Elevator Pitch"/>
            <Editor prop="Job Description"/>
            
        </div>
        </div>
     
    )
}