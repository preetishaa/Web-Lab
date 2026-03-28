import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async () => {
        const response = await fetch("http://localhost:8000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });
        const data = await response.json();
        setMessage(data.message || data.detail);
    };

    return (
        <div style={{ maxWidth: "400px", margin: "100px auto", padding: "30px", border: "1px solid #ddd", borderRadius: "10px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
            <Input label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button text="Register" onClick={handleRegister} />
            {message && <p style={{ textAlign: "center", marginTop: "10px", color: "green" }}>{message}</p>}
            <p style={{ textAlign: "center", marginTop: "10px" }}>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
}

export default Register;