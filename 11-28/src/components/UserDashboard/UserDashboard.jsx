import "./UserDashboard.css";
import UserNotifications from "../UserNotifications/UserNotifications";

export function UserDashboard({ user, handleLogout, handleChangeStatus }) {
    return (
        <div className="user-dashboard">
            <div className="user-card">
                <div>Profilo</div>
                <div>
                    {user.name} {user.lastName}
                </div>
                <div>{user.email}</div>
                <div>{user.status}</div>
                <div>
                    <button onClick={handleLogout}>Logout</button>
                    <button onClick={handleChangeStatus}>{user.status == "Premium" ? "Passa a Basic" : "Passa a Premium"}</button>
                </div>
            </div>
            <div>
                <UserNotifications notifiche={user.notifications} />
            </div>
        </div>
    );
}
