import { NavLink } from "react-router-dom";
import { valueProvider } from "../Context/InfoContex";
import { useState } from "react";

const FormPage = () => {

    const {onSubmitHandle} = valueProvider()

    const [valCatch, setValCatch] = useState({
        name: "",
        age: "",
        city: "",
        email: "",
        phone: "",
    });

    const onCatchVal = (e) => {
        setValCatch({...valCatch, [e.target.name]: e.target.value})
    }


    return (
        <div className="m-auto mt-28 w-96">
            
            <form onSubmit={(e)=> onSubmitHandle(e, valCatch, setValCatch)} className="m-auto w-[450px] shadow-2xl bg-white rounded-2xl p-5">

                <h1 className="text-center text-3xl font-bold mb-5">Fill the form</h1>

                <NavLink to='/table'>
                    <button className="p-4 py-2 rounded shadow-2xl mb-8 text-white bg-blue-500">Data Table</button>
                </NavLink>

                <div className="mb-5">
                    <label htmlFor="name" className="block mb-1" >Name: <span className="text-red-600">*</span></label>
                    <input type="text" id="name" name="name" required value={valCatch.name} className=" bg-gray-100 w-full p-3 rounded focus:outline-dashed" autoComplete="off" onChange={(e)=> onCatchVal(e)}/>
                </div>

                <div className="mb-5">
                    <label htmlFor="age" className="block mb-1" >Age: <span className="text-red-600">*</span></label>
                    <input type="number" id="age" name="age" required value={valCatch.age} className=" bg-gray-100 w-full p-3 rounded focus:outline-dashed" autoComplete="off" onChange={(e)=> onCatchVal(e)}/>
                </div>

                <div className="mb-5">
                    <label htmlFor="city" className="block mb-1" >City: <span className="text-red-600">*</span></label>
                    <input type="text" id="city" name="city" required value={valCatch.city} className=" bg-gray-100 w-full p-3 rounded focus:outline-dashed" autoComplete="off" onChange={(e)=> onCatchVal(e)}/>
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-1" >Email Address: <span className="text-red-600">*</span></label>
                    <input type="email" id="email" name="email" required value={valCatch.email} className=" bg-gray-100 w-full p-3 rounded focus:outline-dashed" autoComplete="off" onChange={(e)=> onCatchVal(e)}/>
                </div>
                
                <div className="mb-5">
                    <label htmlFor="phone" className="block mb-1" >Phone Number: <span className="text-red-600">*</span></label>
                    <input type="text" id="phone" name="phone" required value={valCatch.phone} className=" bg-gray-100 w-full p-3 rounded focus:outline-dashed" autoComplete="off" onChange={(e)=> onCatchVal(e)}/>
                </div>

                <div className="flex justify-end items-center gap-4 mt-8">
                    <button type="reset" className="bg-gray-400 py-2 shadow-2xl px-4 text-lg rounded">Reset</button>
                    <button type="submit" className="py-2 px-4 rounded shadow-2xl text-lg text-white bg-blue-600">Submit</button>
                </div>

            </form>

        </div>
    );
};

export default FormPage;