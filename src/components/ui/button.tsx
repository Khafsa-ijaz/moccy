import type { ReactNode } from "react"

interface button{
    left:ReactNode
}
export function Button({left}:button)
{
    return(
        <>
        <div>
            <button className="w-8 h-8 border drop-shadow-lg border-stone-200 inline-flex justify-center items-center rounded-sm">{left}</button>
           
        </div>
        </>
    )
}