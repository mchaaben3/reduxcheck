import { TOGGLE_FILTER } from "../action/actionTypes";

const initState = 'all'
const filterReducer=(state=initState,{type,payload})=>{
    switch (type) {
        case TOGGLE_FILTER:
            return payload
        default:
            return state;
    }
}
export default filterReducer