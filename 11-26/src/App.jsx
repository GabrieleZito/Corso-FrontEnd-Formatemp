import { useState } from "react";
import "./App.css";
import TodoForm from "./components/organisms/TodoForm/TodoForm";
import { TodoList } from "./components/organisms/TodoList/TodoList";
import { FilterGroup } from "./components/molecules/FilterGroup/FilterGroup";

function App() {
    const [todos, setTodos] = useState([]);
    const [timeFilter, setTimeFilter] = useState("ASC");
    const [catFilter, setCatFilter] = useState("");

    return (
        <div className="container">
            <nav>
                <h1 className="title">TODO List</h1>
                <p>{todos.length} elements</p>
            </nav>
            <main>
                <TodoForm setTodos={setTodos} />
                <FilterGroup />
                <TodoList todoList={todos} />
            </main>
        </div>
    );
}

export default App;
