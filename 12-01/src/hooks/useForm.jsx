import { useState } from "react";

export function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    const setValue = (field, value) => {
        setValues((values) => ({ ...values, [field]: value }));
    };

    const resetValues = () => {
        setValues(initialValues);
    };

    return { values, setValue, resetValues };
}
