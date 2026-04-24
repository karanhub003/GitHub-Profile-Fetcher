import React, { useState } from "react";
import searchImage from "../assets/Search.svg";
import "./SearchBar.css";
import SearchUserBox from "./SearchUserBox";

export default function SearchBar({
  inputValue,
  setInputValue,
  suggestionData,
  setSuggestionData,
  setSelectedUser,
}) {
  return (
    <>
      <div className="search-container">
        <img src={searchImage} alt="" />
        <input
          type="text"
          placeholder="username"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>

      {suggestionData && (
        <SearchUserBox
          userData={suggestionData}
          onClick={() => {
            setSelectedUser(suggestionData)
            setInputValue("")
          }}
        />
      )}
    </>
  );
}
