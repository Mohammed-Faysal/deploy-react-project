import { createContext, useContext, useReducer } from "react"
import { reducerFun } from "../Reducers/infoReducer";

const newCtx = createContext()

const InfoContex = ({children}) => {

    const initialVal = []

    const [catchVal, dispatch] = useReducer(reducerFun, initialVal)

    const handleSubmit = (e, valCatch, setValCatch) => {
        e.preventDefault()
        dispatch({
            type: 'added', 
            id: Date.now(), 
            name: valCatch.name, 
            age: valCatch.age, 
            city: valCatch.city, 
            email: valCatch.email,
            phone: valCatch.phone
        })

        const resetForm = Object.keys(valCatch).reduce((acc, key)=> {
            acc[key] = ""
            return acc
        }, {})
        setValCatch(resetForm)
    }

    const handleEdit = (editId, editValCatch) => {
        dispatch({
            type: 'edit', 
            id: editId, 
            name: editValCatch.name, 
            age: editValCatch.age, 
            city: editValCatch.city, 
            email: editValCatch.email, 
            phone: editValCatch.phone
        })
    }

    const deleteHandler = (id) => {
        if(confirm("Are you sure to delete this item?")){
            dispatch({
                type: 'delete', 
                id
            })
        }
    }

    const necessaryVal = {
        catchVal,
        onSubmitHandle: handleSubmit,
        onEditHandler: handleEdit,
        onDeleteHandle: deleteHandler
    }

    return (
        <div>
            <newCtx.Provider value={necessaryVal}>
                {children}
            </newCtx.Provider>
        </div>
    );
};

export default InfoContex;

export const valueProvider = () => {
    return useContext(newCtx)
}