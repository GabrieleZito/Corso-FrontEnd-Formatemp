import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import "./LoginForm.css";

function LoginForm({ setShowLogin }) {
    const { values, setValue, resetValues } = useForm({ email: "", password: "" });
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

        if (!values.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            tempErrors.email = "Email non valida";
        }

        if (values.password.length < 8) {
            tempErrors.password = "Password troppo corta";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSumbit} noValidate>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        value={values.email}
                        onChange={(e) => setValue("email", e.target.value)}
                        id="email"
                        type="text"
                        required
                    />
                    {errors.email && <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        value={values.password}
                        onChange={(e) => setValue("password", e.target.value)}
                        id="password"
                        type="password"
                        required
                    />
                    {errors.password && <p style={{ color: "red", fontSize: "14px" }}>{errors.password}</p>}
                </div>
                <button type="submit">Login</button>
            </form>
            <div>
                <p>Non hai un account?</p>
                <button onClick={() => setShowLogin(false)}>Registrati</button>
            </div>
        </div>
    );
}

export default LoginForm;
