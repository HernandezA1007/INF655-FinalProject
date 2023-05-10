import React from "react";
import { useAuth } from "../auth";

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>No user signed in</p>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.displayName}</p>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="Profile" />
      <p>Bio: {user.bio}</p>
    </div>
  );
};

export default Profile;

// Compare this snippet from finalproject\src\sections\home\Home.jsx: