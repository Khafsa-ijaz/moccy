import type { ReactNode } from "react"

interface button{
    left:ReactNode,
    text?:string,
}
export function Button({left,text}:button)
{
    return(
        <>
        <div className="w-auto p-2 h-8 border drop-shadow-lg text-neutral-500 border-stone-200 inline-flex justify-center items-center rounded-sm">
            <button >{left}</button>
            <span className="text-sm font-semibold text-neutral-500">{text}</span>
            <></>
           
        </div>
        </>
    )
}