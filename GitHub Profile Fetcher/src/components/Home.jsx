import React, { useEffect, useState } from "react";
import heroImg from "../assets/hero-image-github-profile.jpg";
import SearchBar from "./SearchBar";
import HeadBox from "./HeadBox";
import UserDetails from "./UserDetails";
import useGitHubUser from "../hooks/useGitHubUser";

export const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const {data,loading,repos}=useGitHubUser(inputValue)


  return (
    <>
      <div className="hero-box">
        <img className="main-img" src={heroImg} alt="" />
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          suggestionData={data}
          setSelectedUser={setSelectedUser}
          loading={loading}
        />
      </div>
      <main>{selectedUser && <UserDetails userData={selectedUser} repos={repos}/>}</main>
    </>
  );
};
