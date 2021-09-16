import { v4 } from 'uuid'
import { ADD_TODO, DEL_TODO, TOGGLE_TODO } from '../action/actionTypes';
const initState= [
    {
        id: v4(),
        description:'React App',
        isDone:true
    }
  ]

const todoReducer = (state=initState, {type,payload}) => {
    switch (type) {
        case ADD_TODO:
            return [payload,...state]
        case DEL_TODO:
            return state.filter(elem => elem.id !== payload)
        case TOGGLE_TODO:
            return state.map(elem => elem.id === payload ? {...elem, isDone: !elem.isDone}:elem)
        default:
           return state
    }
}
export default todoReducer;