import React from 'react'
import './SearchUserBox.css'

export default function SearchUserBox({userData,onClick}) {
  return (
    <div className='userBox' onClick={onClick}>
        <div className='user'>
         <div className="img">
            <img src={userData.avatar_url} alt="" />
            </div>
            <div className="userInfo">
                <h3 className='dataName'>{userData.login}</h3>
                <p className='dataTag'>{userData.bio}</p>
            </div>
        </div>
    </div>
  )
}
