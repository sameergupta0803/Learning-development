import { useState, useEffect } from "react";
import axios from "axios";
import ProfileSearchForm from "./ProfileSearchForm";
const BASE_URL = "https://api.github.com/users";
export default function ProfileViewerWithSearch() {
  const [profile, setProfile] = useState({ data: null, isLoading: false });
  const [username, setUsername] = useState("sameergupta0803");
  useEffect(() => {
    async function getUserDetails() {
      const response = await axios.get(`${BASE_URL}/${username}`);
      setProfile({ data: response.data, isLoading: false });
    }
    getUserDetails();
  }, [username]);
  const search = async (username) => {
    setUsername(username);
    setProfile({ data: null, isLoading: true });
  };
  if (profile.isLoading) return <i>Loading...</i>;
  return (
    <div>
      <ProfileSearchForm search={search} />
      <div>{profile?.data?.login}</div>
      <div>
        <img src={profile?.data?.avatar_url} />
      </div>
    </div>
  );
}
