export function Table()
{
    return(
        <table className="table-fixed border w-full border-gray-200 border-collapse ">
            <thead className="bg-stone-100 font-medium">
                <tr className="border-b border-gray-200 text-left border">
                <th className="">Job id</th>
                <th className="px-1 py-1">Job Title</th>
                <th className="px-1 py-1">Company</th>
                <th className="px-1 py-1">Expirey date</th>
                <th className="px-1 py-1 w-40">Reference number</th>
                <th className="px-1 py-1">CopyWriting</th>
                <th className="px-1 py-1">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-gray-200">
                <td className="px-1 py-3">10</td>
                 <td className="px-1 py-3">marketing intern</td>
                  <td className="px-1 py-3 ">next career</td>
                 <td className="px-1 py-3">dc</td>
                  <td className="px-1 py-3">02304</td>
                   <td className="px-1 py-3">requested</td>
                    <td className="px-1 py-3">view</td>
                </tr>
                
            </tbody>
        </table>
    )
}