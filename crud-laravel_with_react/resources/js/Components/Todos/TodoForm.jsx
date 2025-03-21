import React from "react";
import Input from '@/Components/TextInput';

export default function TodoForm({ formData, setData, addTodo }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.text.length < 2) {
            alert("Completa la tarea antes de publicarla");
            return;
        }
        addTodo();

    };

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <Input
                value={formData.todo}
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-darker"
                isFocused={true}
                onChange={(e) => setData('text', e.target.value)}
            />

            <button type="submit">Add Todo</button>
        </form>
    );
}
