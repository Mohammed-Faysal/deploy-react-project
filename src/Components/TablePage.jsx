import { NavLink } from "react-router-dom";
import TableRow from "./TableRow";
import Popup from "./Popup";
import { useState } from "react";
import { valueProvider } from "../Context/InfoContex";

const TablePage = () => {

    const {catchVal} = valueProvider()

    const [isEdit, setIsEdit] = useState(false)
    const [editId, setEditId] = useState(null)

    return (
        <div className="m-10">
            <NavLink to='/'>
                <button className="p-4 py-2 rounded shadow-2xl mb-8 text-white bg-blue-500">Add New</button>
            </NavLink>

            <div className="overflow-x-auto">
                <table className="mx-auto w-full min-w-[1000px] bg-white shadow-2xl">

                    <thead className="bg-blue-400">
                        <tr className="text-white text-left">
                            <th className="p-2">Employee ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Email Address</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <TableRow setIsEdit={setIsEdit} setEditId={setEditId}/>
                    </tbody>

                    <tfoot className="bg-blue-400">
                        <tr className="text-white text-left">
                            <th className="p-2">Employee ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Email Address</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>

                </table>
            </div>

            <p className="mt-4">Showing <span>{catchVal.length}</span> entries</p>

            <Popup isEdit={isEdit} editId={editId} setIsEdit={setIsEdit} setEditId={setEditId}/>
        </div>
    );
};

export default TablePage;