import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = () => {
        const storedUsername = localStorage.getItem("usernameKey");
        const storedPassword = localStorage.getItem("passwordKey");
        if (registerUsername === storedUsername && registerPassword === storedPassword) {
            alert("Log in successul!");
            navigate("/game");
        } else {
            alert("Wrong username or password.");
        }
    }
    return (
        <div>
            <input type="text" onChange={(e) => setRegisterUsername(e.target.value)} placeholder="Username" />
            <input type="password" onChange={(e) => setRegisterPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Log in</button>
        </div>
    )
}
export default Login;