import mylogo from "../../assets/images/logo.png";
export function Avatar() {
    return (
        <div >
            <div className="h-12 w-12 rounded-full bg-blue-950 overflow-hidden"><img src={mylogo} alt="avtarlogo" className="h-12 w-12 object-fill"/></div>
        </div>

    )
}