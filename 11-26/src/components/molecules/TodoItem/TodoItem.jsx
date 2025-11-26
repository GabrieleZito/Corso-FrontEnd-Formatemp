import { Button } from "../../atoms/Button/Button";
import { Checkbox } from "../../atoms/Checkbox/Checkbox";
import "./TodoItem.css";
import { Pencil } from "lucide-react";

export function TodoItem({ item }) {
    return (
        <div className="todoItem">
            <p>{item.text}</p>
            <div>
                <Checkbox />

                <Button text={<Pencil />} />
            </div>
        </div>
    );
}
