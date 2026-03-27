function Button({ text, onClick, color }) {
    return (
        <button
            onClick={onClick}
            style={{
                width: "100%",
                padding: "10px",
                backgroundColor: color || "#667eea",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
            }}
        >
            {text}
        </button>
    );
}

export default Button;