import React from 'react'
import starImag from '../assets/Star.svg'
import forkImag from '../assets/Nesting.svg'
import './Repos.css'


export default function ReposCard({repo}) {
  return (
    <div className="repo-card">
      <h3 className='repoHead'>{repo.name}</h3>
      <p >{repo.description}</p>

      <div className="repo-info">
        <img src={starImag} alt="star" />
        <p>{repo.stargazers_count}</p>
        <img src={forkImag} alt="fork" />
        <p> {repo.forks_count}</p>
        <p>Updated: {repo.updated_at.slice(0, 10)}</p>
      </div>
    </div>
  )
}
