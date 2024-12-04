import { useEffect, useState } from "react";
import { valueProvider } from "../Context/InfoContex";


const Popup = ({isEdit, editId, setIsEdit, setEditId}) => {

    const [editValCatch, setEditvalCatch] = useState({
        name: "",
        age: "",
        city: "",
        email: "",
        phone: "",
    });

    const {onEditHandler, catchVal} = valueProvider()

    useEffect(()=> {
        if(isEdit){
            const findSpecificObject = catchVal.find((val) => val.id === editId) // output will be an object
            if(findSpecificObject){
                setEditvalCatch(findSpecificObject)
            }
        }
    }, [isEdit, editId, catchVal])

    const onEditCatchVal = (e) => {
        setEditvalCatch({...editValCatch, [e.target.name]: e.target.value})
    }

    const handleSave = (e) => {
        e.preventDefault()
        setIsEdit(false)
        setEditId(null)
        onEditHandler(editId, editValCatch)
    }

    return (
            isEdit && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <form onSubmit={handleSave} className="m-auto w-[450px] shadow-2xl bg-white rounded-2xl p-5">
                            <h2 className="text-2xl font-bold mb-4">Edit Details</h2>
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-1">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={editValCatch.name}
                                    onChange={(e)=> onEditCatchVal(e)}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="age" className="block mb-1">Age:</label>
                                <input
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={editValCatch.age}
                                    onChange={(e)=> onEditCatchVal(e)}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="city" className="block mb-1">City:</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={editValCatch.city}
                                    onChange={(e)=> onEditCatchVal(e)}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-1">City:</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={editValCatch.email}
                                    onChange={(e)=> onEditCatchVal(e)}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block mb-1">Phone:</label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={editValCatch.phone}
                                    onChange={(e)=> onEditCatchVal(e)}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
        
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-400 rounded"
                                    onClick={()=> setIsEdit(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                
            )
    );
};

export default Popup;