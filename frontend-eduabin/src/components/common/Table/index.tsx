
export default function Tabla ({ headers, data }) {
  return (
        <>
            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 rounded-b-lg">
                <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                        {headers.map((header, i) => {
                          return (
                                <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                    scope="col" key={i}>
                                    {header}
                                </th>
                          )
                        })}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {data.map((dats, index) => {
                      return (
                            <tr className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                key={index}>
                                {dats.map((dat, i) => {
                                  return (<td className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                        scope="col" key={i}>
                                        {dat}
                                    </td>)
                                })}
                            </tr>
                      )
                    })}
                </tbody>
            </table>
        </>
  )
}
