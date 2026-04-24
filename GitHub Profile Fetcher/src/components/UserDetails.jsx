import React, { useEffect, useState } from "react";
import HeadBox from "./HeadBox";
import UserCard from "./UserCard";

export default function UserDetails({userData,repos}) {
  if(!userData) return null;
 
  return (
    <>
      <HeadBox
        image={userData.avatar_url}
        followers={userData.followers}
        followings={userData.following}
        location={userData.location}
      />
      <UserCard repos={repos}/>
    </>
  );
}
