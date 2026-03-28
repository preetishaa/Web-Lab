import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async () => {
    const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/todo";
    } else {
        setMessage(data.detail);
    }
};

    return (
        <div style={{ maxWidth: "400px", margin: "100px auto", padding: "30px", border: "1px solid #ddd", borderRadius: "10px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
            <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button text="Login" onClick={handleLogin} />
            {message && <p style={{ textAlign: "center", marginTop: "10px", color: "green" }}>{message}</p>}
            <p style={{ textAlign: "center", marginTop: "10px" }}>Don't have an account? <a href="/register">Register</a></p>
        </div>
    );
}

export default Login;