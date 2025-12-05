import {useState} from "react";
import Login from "./Login";

function Signup() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const addStorage = () => {
        localStorage.setItem("usernameKey", registerUsername);
        localStorage.setItem("passwordKey", registerPassword);
        setRegisterUsername("");
        setRegisterPassword("");
        console.log(registerUsername);
        console.log(registerPassword);
    //     const typedUsername = value.registerUsername;
    //     const typedPassword = value.registerPassword;
    //     if (registerUsername && registerPassword == ({registerUsername, registerPassword})) {
    //         setRegisterPassword(true); // useState(true)?
        }
    
    return (
        <div>
            <input type="text" value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)} placeholder="Username" />
            <input type="text" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} placeholder="Password" />
            <button onClick={addStorage}>Sign up</button>
            
            <div>
                <Login/>
            </div>
        </div>
    )
}
export default Signup;

// value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)} 
// value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)}
// onClick={addStorage}