
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import { addTodo, toggleFilter } from './redux/action/actions';
import TodoList from './todoList';
function App() {
 const todoList = useSelector(state => state.todos)
 const filter = useSelector(state=>state.filter)
 const dispatch = useDispatch()
 const description = useRef()
 const filterdList = ()=>{
   switch (filter) {
     case 'undone':
       return todoList.filter(elem=>elem.isDone===false)
       case 'isdone':
        return todoList.filter(elem=>elem.isDone===true)
     default:
      return todoList
   }
 }
 const handleAdd = ()=> {
  dispatch(addTodo(description.current.value))
  dispatch(toggleFilter('all'))

}
 
  return (
    <div className="bg-gray-800 h-full mx-20 ">
            <div className="inline-flex w-9/12 my-4  mx-20">
                  <input  ref={description} type="text" className="bg-white hover:bg-gray-100 text-black py-2 px-4   w-full" placeholder="new Todo ?"/>
                  <button onClick={()=>handleAdd()} className="bg-blue-500 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded-l  w-3/12">Add</button>
            </div>
          <div className="inline-flex w-9/12 mb-4 mx-20">
            <button 
            onClick={()=>dispatch(toggleFilter('all'))}
             className="bg-white hover:bg-gray-100 text-black  font-bold py-2 px-4   w-full">All</button>
            <button 
            onClick={()=>dispatch(toggleFilter('undone'))} 
            className="bg-red-500  hover:bg-gray-100 text-white  font-bold py-2 px-4 w-full">UnDone</button>
            <button 
            onClick={()=>dispatch(toggleFilter('isdone'))} 
            className="bg-green-500  hover:bg-gray-100 text-white  font-bold py-2 px-4 rounded-r  w-full">isDone</button>

         </div>

          <TodoList todoList={filterdList()}/>
    </div>
      );
}

export default App;
