import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "./redux/action/actions";

const Todo = ({ todo }) => {
    const dispatch = useDispatch()
    const classes = `px-4 py-4
    inline-flex
     text-xs leading-5 
     font-semibold 
     rounded-full 
 
     ${todo.isDone ? 'bg-green-100 text-green-800 ':'bg-red-100 text-red-800 '}`

  return (
    <tr class="mb-4">
      <td className="px-6 py-4 whitespace-nowrap mr-2">
        <div class="flex items-center">
          
          <div class="ml-4">
            <div class={`text-sm font-medium text-gray-900 ${todo.isDone ? `line-through`: `` }`}>{todo.description}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
          <button 
            className={classes}
            onClick={()=>dispatch(toggleTodo(todo.id))}
            >
               {todo.isDone ? 'isDone':'unDone'}
             </button>
      </td>
      <td className="px-7 py-4 whitespace-nowrap">
      <button 
            className="px-4 py-4 
            inline-flex
             text-xs leading-5 
             font-semibold 
             rounded-full 
             bg-red-700 
             text-red-200"
                onClick={()=>dispatch(deleteTodo(todo.id))}
             >
                Delete
             </button>

      </td>
    </tr>
  );
};

export default Todo;
