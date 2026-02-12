import { IoClose } from "react-icons/io5";
export function CreditModal() {
    return (
        <div className="bg-stone-100 text-sm m-4 w-110   flex flex-col gap-2 rounded-lg">
            <div className=" bg-white shadow-md p-6 flex justify-between">
                <h2 className="font-bold  text-xl">Add More</h2>
                <button>< IoClose size={25} /></button>
            </div>
            <div className=" flex flex-col  gap-3 bg-white border border-neutral-200 p-4 m-4 rounded-lg">
                <h2 className="font-semibold">Moccy Credits</h2>
                <div className="flex flex-col gap-1 font-medium"><label>Quantity</label>
                    <div className="w-full border p-1 border-neutral-300 h-8 rounded-md">
                        <input placeholder="300" type="text" className="border-none outline-none" />
                    </div>

                </div>
                <div className="flex flex-col gap-1 font-medium"><label>Cost per credit</label>
                    <div className=" flex justify-between w-full gap-4 border p-1 border-neutral-300 h-8 rounded-md">
                        <input placeholder="2" type="text" className="border-none outline-none" />
                        {/* <input placeholder={`Pounds ${<RiArrowDropDownLine/>}` } type="text" className=" border-l-2 border-neutral-200  w-0 h-6" /> */}
                        <select className=" outline-none border-l border-neutral-400  w-30 h-6">
                            <option>&Pounds</option>
                            <option>$USD</option>
                        </select>
                    </div>

                </div>
                <div className="flex flex-col gap-1 font-medium"><label>Invoce /Transaction ID</label>
                    <div className="w-full border p-1 border-neutral-300 h-8 rounded-md">
                        <input placeholder="300" type="text" className="border-none outline-none" />
                    </div>
                </div>
                <div className="flex flex-col gap-1 font-medium"><label>Add Comment <span className="font-md text-neutral-400 ">(optional)</span></label>
                    <div className="w-full border p-1 border-neutral-300 h-8 rounded-md">
                        <input placeholder="Add short comment for future reference" type="text" className="border-none outline-none" />
                    </div>

                </div>

            </div>
              <div className=" flex flex-col  gap-3 bg-white border border-neutral-200 p-4 m-4 rounded-lg">
                <h2 className="font-semibold">Currency</h2>
                <div className="flex flex-col gap-1 font-medium"><label>Quantity</label>
                    <div className="w-full border p-1 border-neutral-300 h-8 rounded-md">
                        <input placeholder="400" type="text" className="border-none outline-none" />
                    </div>

                </div>
                <div className="flex flex-col gap-1 font-medium"><label>Invoce /Transaction ID</label>
                     <div className=" flex justify-between w-full gap-4 border p-1 border-neutral-300 h-8 rounded-md">
                        <input placeholder="2" type="text" className="border-none outline-none" />
                        {/* <input placeholder={`Pounds ${<RiArrowDropDownLine/>}` } type="text" className=" border-l-2 border-neutral-200  w-0 h-6" /> */}
                        <select className=" outline-none border-l border-neutral-400  w-30 h-6">
                            <option>&Pounds</option>
                            <option>$USD</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col gap-1 font-medium"><label>Add Comment <span className="font-md text-neutral-400 ">(optional)</span></label>
                    <div className="w-full border p-1 border-neutral-300 h-8 rounded-md">
                        <input placeholder="Add short comment for future reference" type="text" className="border-none outline-none" />
                    </div>

                </div>

            </div>
            <div className="w-100 flex gap-4 justify-end items-end leading-tight text-right p-2">
                    <button className="p-2 pl-4 rounded-lg text-[#4A154B] font-semibold">Cancel</button>
                    <button className="p-2 pl-4 pr-4 rounded-lg bg-[#4A154B] text-white font-semibold">Add</button>
                </div>
        </div>
    )
}