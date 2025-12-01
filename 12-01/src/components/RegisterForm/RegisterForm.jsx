import { useState } from "react";
import { useForm } from "../../hooks/useForm";

function RegisterForm({ setShowLogin }) {
    const { values, setValue, resetValues } = useForm({ name: "", lastName: "", email: "", password: "", repeatPassword: "" });
    const [errors, setErrors] = useState({});

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(values);
        if (validateValues()) {
            console.log("Login Effettuato");
        } else {
            console.log("Login non valido");
        }
    };

    const validateValues = () => {
        const tempErrors = {};

        if (!values.name) {
            tempErrors.name = "Campo Obbligatorio";
        }
        if (!values.lastName) {
            tempErrors.lastName = "Campo Obbligatorio";
        }

        if (!values.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            tempErrors.email = "Email non valida";
        }

        if (values.password.length < 8) {
            tempErrors.password = "Password troppo corta";
        }

        if (values.password != values.repeatPassword) {
            tempErrors.repeatPassword = "Le password devono essere uguali";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    return (
        <div>
            <h2>Registrati</h2>
            <form onSubmit={handleSumbit} noValidate>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input value={values.name} onChange={(e) => setValue("name", e.target.value)} id="name" type="text" />
                    {errors.name && <p style={{ color: "red", fontSize: "14px" }}>{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="lastName">Cognome</label>
                    <input value={values.lastName} onChange={(e) => setValue("lastName", e.target.value)} id="name" type="text" />
                    {errors.lastName && <p style={{ color: "red", fontSize: "14px" }}>{errors.lastName}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input value={values.email} onChange={(e) => setValue("email", e.target.value)} id="email" type="text" />
                    {errors.email && <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="current-password">Password</label>
                    <input
                        value={values.password}
                        onChange={(e) => setValue("password", e.target.value)}
                        id="current-password"
                        type="password"
                    />
                    {errors.password && <p style={{ color: "red", fontSize: "14px" }}>{errors.password}</p>}
                </div>
                <div>
                    <label htmlFor="repeat-password">Ripeti Password</label>
                    <input
                        value={values.repeatPassword}
                        onChange={(e) => setValue("repeatPassword", e.target.value)}
                        id="repeat-password"
                        type="password"
                    />
                    {errors.repeatPassword && <p style={{ color: "red", fontSize: "14px" }}>{errors.repeatPassword}</p>}
                </div>
                <button type="submit">Registrati</button>
            </form>
            <div>
                <p>Hai già un account?</p>
                <button onClick={() => setShowLogin(true)}>Accedi</button>
            </div>
        </div>
    );
}

export default RegisterForm;
