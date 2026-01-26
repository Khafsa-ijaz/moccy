
import { createContext, useContext, type ReactNode } from "react";
import { useState } from "react";
interface Navtype{
    menu: boolean,
    setmenu:React.Dispatch<React.SetStateAction<boolean>>;
    
}
const Navcontext=createContext<Navtype |null>(null);
export function NavApi({ children }:{children:ReactNode}) {
    const [menu, setmenu] = useState<boolean>(true)
   return(
    <>
    <Navcontext.Provider value={{menu,setmenu}}>
            {children}
        </Navcontext.Provider>
    </>
   )

}
export function Usenav() {
    const nav= useContext(Navcontext);
    if (!nav)
    {
     throw new Error("error here")
    }
    return nav;
}