export function Box() {
    return (
        <div className="bg-stone-100 m-4 w-110  flex flex-col gap-3 rounded-lg">
            <div>
                <h2 className="font-bold  text-2xl bg-white shadow-md p-6">Change Status</h2>
            </div>
            
            <div className=" m-3 p-4 rounded-lg bg-white flex flex-col gap-2 justify-center items-start w-100 h-30 ">
                <label className="font-semibold">Status</label>
                <div className="w-90 outline-none border-2 border-neutral-100 p-3 rounded-lg" >
                    <select className="outline-none justify-between w-full">
                        <option>Requested</option>
                        <option>Completed</option>
                        <option>Pending</option>
                    </select>
                </div>
                

            </div>
            <div className="w-100 flex gap-4 justify-end items-end leading-tight text-right p-2">
                    <button className="p-2 pl-4 rounded-lg text-[#4A154B] font-semibold">Cancel</button>
                    <button className="p-2 pl-4 pr-4 rounded-lg bg-[#4A154B] text-white font-semibold">Save Changes</button>
                </div>

        </div>
    )
}