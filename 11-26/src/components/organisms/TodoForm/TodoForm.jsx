import { Input } from "../../atoms/Input/Input";
import { Select } from "../../atoms/Select/Select";
import { Button } from "../../atoms/Button/Button";
import { useState } from "react";
import "./TodoForm.css";

function TodoForm({ setTodos }) {
    const options = ["Scegli Categoria", "Lavoro", "Svago"];
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");

    const addTodo = () => {
        setTodos((t) => [...t, { text: text, category: category }]);
    };

    return (
        <div className="form">
            <div>
                <Input onChangeFunc={(e) => setText(e.target.value)} />
                <Select options={options} setCategory={setCategory} />
            </div>
            <Button text={"Aggiungi"} onClickFunc={addTodo} />
        </div>
    );
}

export default TodoForm;
