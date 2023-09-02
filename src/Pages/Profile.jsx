import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from '../Components/ProfileCard'

const Profile = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const accessToken = "YOUR_ACCESS_TOKEN_HERE";
    axios
      .get("https://api.jokolodang.com/api/v1/authentication/login", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setUserData(response.data.data.user);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <ProfileCard users={userData} />
  );
};

export default Profile;
