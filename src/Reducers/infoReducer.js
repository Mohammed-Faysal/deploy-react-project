export const reducerFun = (state, action) => {
    switch (action.type) {
        case 'added':
            return [...state, {
                id: action.id, 
                name: action.name, 
                age: action.age, 
                city: action.city, 
                email: action.email, 
                phone: action.phone
            }]

        case 'edit' :
            return state.map(val => val.id === action.id ? 
                {
                    ...val, 
                    name: action.name, 
                    age: action.age, 
                    city: action.city, 
                    email: action.email, 
                    phone: action.phone
                } : val
            )

        case 'delete': 
            return state.filter(val => val.id !== action.id)
            
        default:
            return state
    }
}

