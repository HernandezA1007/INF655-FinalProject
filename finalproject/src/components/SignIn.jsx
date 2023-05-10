import React, { useState } from "react";
import { signInWithEmail, signInWithGoogle } from "../firebase";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmail(email, password);
            setEmail("");
            setPassword("");
        } catch (error) {
            setError(error.message);
        }
    };

    // Google part too
    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
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
            <button type="submit">Sign In</button>
            <button onClick={handleGoogleSignIn}>Sign In With Google</button>
      </form>
    );
};

export default SignIn;