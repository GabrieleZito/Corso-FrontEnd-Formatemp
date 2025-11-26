import { Button } from "../../atoms/Button/Button";
import { Checkbox } from "../../atoms/Checkbox/Checkbox";
import "./TodoItem.css";
import { Pencil, Pickaxe, Volleyball } from "lucide-react";

export function TodoItem({ item }) {
    return (
        <div className="todoItem">
            <p>{item.text}</p>
            <div>
                {item.time.getUTCDate() + "/" + item.time.getUTCMonth() + "/" + item.time.getUTCFullYear()}
                {item.category == "lavoro" && <Pickaxe />}
                {item.category == "svago" && <Volleyball />}

                <Checkbox />

                <Button text={<Pencil />} />
            </div>
        </div>
    );
}
