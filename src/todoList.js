import React from 'react'
import Todo from './Todo'

const TodoList = ({todoList}) => {
    return (
        <div className="flex flex-col w-9/12 mx-20">
            <div className="-my-2 overflow-x-auto sm:mx-6 lg:mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shodow overflow-hidden  sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <tbody class="bg-white divide-y divide-gray-200">
                                {todoList.map(todo => <Todo  todo={todo}/>)}
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default TodoList
