import { Usenav } from "../context/navApi";
import menuicon from '../../assets/images/menu.svg'
import menucollaspe from '../../assets/images/menu.png'
import moccylogo from "../../assets/images/logo.png";
export function NavIcon()
{
        const { menu, setmenu } = Usenav();
    return(
        <>
         <div className="flex items-center justify-between">
                    {menu && (<div>
                        <div className="flex items-center gap-0"><img src={moccylogo} alt='logo' className="w-25 h-23 object-contain relative" /><span className="text-2xl font-bold absolute left-20 font-[Quicksand]">MOCCY</span></div>
                        <span className="text-xs font-semibold absolute top-16 left-40 font-[Quicksand] opacity-80" >Admin</span>
                    </div>)

                    }
                    {
                        menu ? <button onClick={() => { setmenu(!menu) }}>
                            <img src={menuicon} />
                        </button> : <button onClick={() => { setmenu(!menu) }} className="inline-flex justify-center items-center ml-8 mt-8"><img src={menucollaspe} className="h-5 w-5 " /></button>
                    }
                </div>
        </>
    )
}