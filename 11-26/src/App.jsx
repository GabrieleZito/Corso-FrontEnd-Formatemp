import { useState } from "react";
import "./App.css";
import TodoForm from "./components/organisms/TodoForm/TodoForm";
import { TodoList } from "./components/organisms/TodoList/TodoList";

function App() {
    const [todos, setTodos] = useState([]);
    return (
        <div className="container">
            <nav>
                <h1 className="title">TODO List</h1>
                <p>{todos.length} elements</p>
            </nav>
            <main>
                <TodoForm setTodos={setTodos} />
                <TodoList />
            </main>
        </div>
    );
}

export default App;
