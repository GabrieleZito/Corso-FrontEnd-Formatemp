import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <>
            <div className="container">
                {showLogin ? <LoginForm setShowLogin={setShowLogin} /> : <RegisterForm setShowLogin={setShowLogin} />}
            </div>
        </>
    );
}

export default App;
