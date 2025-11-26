import { Button } from "../../atoms/Button/Button";
import { Select } from "../../atoms/Select/Select";
import "./FilterGroup.css"

export function FilterGroup() {
    const select1 = ["Tutti", "Completati", "Attivi"];
    const select2 = ["Dal più vecchio", "Da più recente"];
    return (
        <div className="filterGroup">
            <Select options={select1} />
            <Select options={select2} />
            <Button text={"Filtra"} />
        </div>
    );
}
