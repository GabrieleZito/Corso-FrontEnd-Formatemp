import { useState } from "react";
import { Button } from "../../atoms/Button/Button";
import { Checkbox } from "../../atoms/Checkbox/Checkbox";
import "./TodoItem.css";
import { Pencil, Pickaxe, Volleyball } from "lucide-react";
import { Input } from "../../atoms/Input/Input";

export function TodoItem({ item }) {
    const [isEdit, setIsEdit] = useState(false);
    return (
        <div className="todoItem">
            {isEdit ? <Input value={item.text} /> : <p>{item.text}</p>}
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
