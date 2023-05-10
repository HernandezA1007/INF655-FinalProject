import React, { useState } from "react";
import { signUpWithEmail } from "../firebase";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // Error handling
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signUpWithEmail(email, password);
            setEmail("");
            setPassword("");
        } catch (error) {
            setError(error.message);
        }
        
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
      </form>
    );
};

export default SignUp;
