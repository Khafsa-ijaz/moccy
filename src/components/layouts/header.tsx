import type { ReactNode } from "react";

interface components{
    left?:ReactNode;
    right?:ReactNode;
}
export function Headers(prop:components)
{
    return(
        <div className="shadow-md h-20 w-full bg-gray-50">
         <div className="p-4 flex justify-between items-center text-center">
            {prop.right} 
                      {prop.left}  
                       
                             
        </div>
        </div>
    )
}