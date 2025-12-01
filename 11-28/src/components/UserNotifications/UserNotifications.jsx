import { useState } from "react";
import "./UserNotifications.css";

export default function UserNotifications({ notifiche, setUser }) {
    const [showNotifications, setShowNotifications] = useState(false);

    const handleShownotifications = () => {
        setShowNotifications(!showNotifications);
        setUser(user => ({...user, notifications: []}))
    };

    return (
        <>
            <div className="notifiche-header">
                <div>Notifiche</div>
                <div>
                    <button onClick={handleShownotifications}>Mostra</button>
                </div>
            </div>
            <div>
                {showNotifications ? (
                    <div>{notifiche.length > 0 ? notifiche.map((n) => <p key={n}> {n} </p>) : "Non ci sono notifiche"}</div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}
