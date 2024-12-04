import { valueProvider } from "../Context/InfoContex";

const TableRow = ({setIsEdit, setEditId}) => {

    const {catchVal, onDeleteHandle} = valueProvider()

    const onEditHandler = (id) => {
        setIsEdit(true)
        setEditId(id)
    }

    return (
        <>

            {
                catchVal.length > 0 ? (
                    catchVal.map((val, index) => {
                        return <tr key={val.id} className="border-b last:border-0 even:bg-gray-100">
                                    <td className="p-3">{index+1}</td>
                                    <td>{val.name}</td>
                                    <td>{val.age}</td>
                                    <td>{val.city}</td>
                                    <td>{val.email}</td>
                                    <td>{val.phone}</td>
                                    <td>
                                        <button className="p-2 px-4 rounded shadow-2xl bg-green-500 text-white mr-2 font-medium" onClick={()=> onEditHandler(val.id)}>Edit</button>
                                        <button className="p-2 px-4 rounded shadow-2xl bg-red-500 text-white font-medium" onClick={()=> onDeleteHandle(val.id)}>Delete</button>
                                    </td>
                                </tr>
                    })
                ) : (
                    <tr>
                        <td className="text-center p-3 text-lg" colSpan="7">No Data Available</td>
                    </tr>
                )
            }

        </>
    );

};

export default TableRow;