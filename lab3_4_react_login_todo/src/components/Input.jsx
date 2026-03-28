import { useState } from "react";

function Input({ label, type, value, onChange }) {
    const [focused, setFocused] = useState(false);

    return (
        <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{
                    width: "100%",
                    padding: "10px",
                    border: focused ? "2px solid #667eea" : "2px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "16px",
                    outline: "none",
                }}
            />
        </div>
    );
}

export default Input;