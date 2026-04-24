import React, { useEffect, useState } from 'react'

export default function useGitHubUser(username) {
  const [repos,setRepo]=useState([])
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!username || username.length < 2) {
      setData(null);
      return;
    }
    const timer = setTimeout(() => {
      setLoading(true);
// fetching user data
      fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((result) => {setData(result)});
  
// fetching user repos
      fetch(`https://api.github.com/users/${username}/repos`)
      .then(res=>res.json())
      .then(repoData=>{
        const sorted=repoData.sort((a,b)=>new Date(b.updated_at)-new Date(a.updated_at)).slice(0,4);
        setRepo(sorted) //gives only latest 4 repos
      })

    }, 500);

    return () => clearTimeout(timer);

  }, [username]);

  return  {data, loading,repos} ;
}

