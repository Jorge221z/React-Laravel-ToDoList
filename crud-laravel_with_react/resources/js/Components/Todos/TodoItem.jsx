import React from "react";

export default function TodoItem({ todo, className, onRestore, onComplete, onRemove }) {

    return(
        <div className="flex mb-4 items-center">
            <p className={className}>{todo.text}</p>
            {todo.completed === true &&
            <button onClick={onRestore}
            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-200 border-gray hover:bg-gray-600"
            >
                Deshacer
            </button>

            }




            {!todo.completed === true &&
                <button onClick={onComplete}
            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-200 border-gray hover:bg-green-600"
            >
                Completar
            </button>
            }

            <button onClick={onRemove}
            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-red-200 border-gray hover:bg-red-600"
            >
                Eliminar
            </button>
        </div>


    );



}
