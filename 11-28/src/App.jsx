import { useState } from "react";
import { UserDashboard } from "./components/UserDashboard/UserDashboard";
import "./App.css";

function App() {
    const [user, setUser] = useState(null);

    const handleLogin = () => {
        setUser({
            name: "Gabriele",
            lastName: "Zito",
            email: "example.gmail.com",
            status: "basic",
            hobbies: ["Pescare", "Caccia", "Andare in barca"],
            notifications: ["Mandare Bonico", "Vai a fare la spesa"],
        });
    };

    const handleLogout = () => {
        setUser(null);
    };

    const handleChangeStatus = () => {
        let newStatus = "";
        if (user.status == "basic") {
            newStatus = "premium";
        } else newStatus = "basic";

        setUser((old) => ({ ...old, status: newStatus }));
    };

    return (
        <div className="container">
            {user ? (
                <UserDashboard
                    user={user}
                    setUser={setUser}
                    handleLogout={handleLogout}
                    handleChangeStatus={handleChangeStatus}
                />
            ) : (
                <div>
                    <button onClick={handleLogin}>LOGIN</button>
                </div>
            )}
        </div>
    );
}

export default App;
