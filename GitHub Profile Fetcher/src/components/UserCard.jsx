import React from 'react'
import ReposCard from './ReposCard'
import './Repos.css'

export default function UserCard({repos}) {
  return (
    <div className='repo-box'>
        <h2 className='userName'>GitHub</h2>
        <p className='userTag'>Lorem ipsum dolor sit amet consectetur</p>
       <div className='repo-flex'>
        {repos.map((repo)=>(<ReposCard key={repo.id} repo={repo}/>))
        }
       </div>
    </div>
  )
}
