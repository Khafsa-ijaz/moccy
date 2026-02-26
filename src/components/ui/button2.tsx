import type { ReactNode } from "react"

interface button{
    left:ReactNode,
    text?:ReactNode,
    btn?:ReactNode
}
export function Button2({left,text,btn}:button)
{
    return(
        <>
        <div className="w-auto h-8 border text-neutral-500 drop-shadow-lg border-stone-200 inline-flex justify-center items-center rounded-lg cursor-pointer">
            <button  className="border-r border-neutral-300 h-8 w-6 inline-flex justify-center items-center cursor-pointer ">{left}</button>
            <button  className="border-r border-neutral-300 h-8 w-6 inline-flex justify-center items-center cursor-pointer ">{text}</button>
            <button  className=" border-neutral-300 h-8 w-6 inline-flex justify-center items-center cursor-pointer">{btn}</button>
           
        </div>
        </>
    )
}