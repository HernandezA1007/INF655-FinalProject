import React from "react";
import { GiSoccerBall } from "react-icons/gi";
import data from "./data";
import soccer from "../../assets/images/soccer.png";
import "./navbar.css";
// userAuth
import { Link } from "react-router-dom";
import { useAuth } from "../../useAuth";
import SignIn from "../../components/SignIn";
import SignOut from "../../components/SignOut";
import SignUp from "../../components/SignUp";
// import styled from 'styled-components';


const Navbar = () => {
    const { user } = useAuth();
    
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <button className="icon-button">
                    <GiSoccerBall style={{ color: "black", fontSize: "2rem"}} />
                </button>

                <ul className="nav-links">
                    {data.map((item) => (
                        <li key={item.id} className="nav-item">
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}
                </ul>

                {user ? (
                    <div>
                        <Link to="/profile">Profile</Link>
                        <SignOut />
                    </div>
                ) : (
                    <div>
                        <SignIn />
                        <SignUp />
                    </div>
                )}

                <a href="index.html" className="logo">
                    <img src={soccer} alt="Logo" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;


/* alternative way to style the navbar
// install 
npm install --save styled-components
// import
import styled from 'styled-components';

// create styled components
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const InputField = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    width: 200px;
`;

const SubmitButton = styled.button`
    padding: 10px 20px;
    margin-top: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

// put this part in the return
<FormContainer>
    <InputField type="email" placeholder="Email" />
    <InputField type="password" placeholder="Password" />
    <SubmitButton>Sign In</SubmitButton>
    <SubmitButton>Sign In with Google</SubmitButton>
</FormContainer>
<FormContainer>
    <InputField type="email" placeholder="Email" />
    <InputField type="password" placeholder="Password" />
    <SubmitButton>Sign Up</SubmitButton>
</FormContainer>
*/