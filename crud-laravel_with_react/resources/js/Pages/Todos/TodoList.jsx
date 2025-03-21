import {useState} from "react";
import { Head, useForm } from "@inertiajs/react"
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ValidationErrors from "@/Components/ValidationErrors";
import TodoStatus from "@/Components/Todos/TodoStatus";
import TodoForm from "@/Components/Todos/TodoForm";
import TodoItem from "@/Components/Todos/TodoItem";

export default function TodoList(props) {

    const { data, setData, post, put, delete: destroy, errors, reset} = useForm({
        text: '',
    });

    const submitTodo = async () => {
        await post(route('todos.store'), {
            preserveScroll: true, // Mantener el scroll en la misma posición
            onSuccess: () => {
                reset(); // Resetea el campo 'text' a su valor inicial (vacío)
            },
        });
    };

    const restore = async id => {
        await put(route('todos.restore', {id}), {
            preserveScroll: true, // Mantener el scroll en la misma posición
        });
    }
    const complete = async id => {
        await put(route('todos.complete', {id}), {
            preserveScroll: true, // Mantener el scroll en la misma posición
        });
    }
    const remove = async id => {
        await destroy(route('todos.remove', {id}), {
            preserveScroll: true, // Mantener el scroll en la misma posición
        });
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h1 className="font-semibold text-xl text-gray-800 leading-tight">To Do List</h1>}>

            <Head title="To Do List"></Head>

            <div className="h-full w-full flex items-center justify-center bg-teal-600 font-sans">
                <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-2/4 lg:max-w-lg">

                    <h2 className="text-gray-darkest text-center">To do List</h2>

                    {/*validacion y status*/ }
                    <div className="mb-4">
                    <ValidationErrors errors={errors} />
                    {props.status && <TodoStatus message={props.status} />}

                    </div>

                    {/*Formulario para añadir*/ }
                    <div>
                    <TodoForm
                        setData={setData}
                        formData={data}
                        addTodo={submitTodo}
                    />
                    </div>


                    {/*Lista de tareas*/ }
                    <div>
                        {props.todos.length === 0 &&
                        <TodoStatus message="No hay tareas agregadas" color="red" />}

                    {props.todos.map((todo) => {
                        const className = todo.completed? 'line-through' : '';
                        return (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                className={className}
                                onRestore={() => restore(todo.id)}
                                onComplete={() => complete(todo.id)}
                                onRemove={() => remove(todo.id)}
                            />


                        );
                    })}

                    </div>


                </div>
            </div>
            </Authenticated>

    );
}
