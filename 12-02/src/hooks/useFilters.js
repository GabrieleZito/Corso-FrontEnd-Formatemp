import { useState } from "react";

export default function useFilters(initialValues) {
    const [filters, setFilters] = useState(initialValues);

    const resetFilters = () => {
        setFilters(initialValues);
    };

    const setFilter = (filter, value) => {
        setFilters((f) => ({ ...f, [filter]: value }));
    };

    return { filters, resetFilters, setFilter };
}
