import { useState, useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));

    const fetchTodos = async () => {
        const response = await fetch(`http://localhost:8000/todos/${user.id}`);
        const data = await response.json();
        setTodos(data.todos);
    };

    const handleAddTodo = async () => {
        await fetch(`http://localhost:8000/todos/${user.id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, description }),
        });
        setTitle("");
        setDescription("");
        fetchTodos();
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div style={{ maxWidth: "500px", margin: "50px auto", padding: "30px", border: "1px solid #ddd", borderRadius: "10px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>My Todos</h2>
            <Input label="Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Input label="Description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            <Button text="Add Todo" onClick={handleAddTodo} />
            <div style={{ marginTop: "20px" }}>
                {todos.map((todo) => (
                    <div key={todo.id} style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px", marginBottom: "10px" }}>
                        <h4>{todo.title}</h4>
                        <p>{todo.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todo;