import { TodoItem } from "../../molecules/TodoItem/TodoItem";
import "./TodoList.css";

export function TodoList({ todoList }) {
    return (
        <div className="todoList">
            {todoList.map((t) => (
                <TodoItem key={t.id} item={t} />
            ))}
        </div>
    );
}
