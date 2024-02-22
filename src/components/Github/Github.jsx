import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import GitHubCalendar from 'react-github-calendar';

function Github() {
    const data = useLoaderData()

    // const [data,setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/ankit3060')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
    

  return (
    <>
    
    <div className='text-center bg-pink-700 m-4 text-white p-4 text-3xl flex justify-center'>
        
            <div className="flex">
                <div className="mr-14">
                    <img className='mt-4 mb-4 bg-blur rounded-full' src={data.avatar_url} alt="Git picture" width={300} />
                </div>
                <div className='mt-14'>
                    <h3>Name : {data.name}</h3>
                    <h3>Followers : {data.followers}</h3>
                    <h3>Following : {data.following}</h3>
                    <h3>Location : {data.location}</h3>
                    <h3>Repositories : {data.public_repos}</h3>
                    <h3>Twitter : {data.twitter_username}</h3>
                </div>
            </div>
            
        </div>

        <div className='text-center bg-pink-700 m-4 text-white p-4 text-3xl flex justify-center'>
        {/* <h3 className='mx-auto'>Contribution Chart</h3> */}
        <div className="mx-auto mt-8 flex">
            <h3></h3>
                <GitHubCalendar username={data.login} />
        </div>
        </div>
        
    
    </>
    
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ankit3060')
    return response.json()
}