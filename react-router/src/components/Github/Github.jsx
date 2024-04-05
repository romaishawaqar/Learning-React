import React, { useEffect, useState } from 'react'
import {useLoaderdata} from 'react-router-dom'

function Github() {
    const data = useLoaderdata();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch(`https://codeforces.com/api/user.info?handles=kvivekcodes&checkHistoricHandles=false`)
    //     .then(responce => responce.json())
    //     .then(data => {
    //         setData(data.result[0]);
    //     })
    // }, [])
    // console.log(data);
  return (
    <div className='bg-gray-400 p-4 text-red-500 text-3xl'>Codeforces: Rating = {data.rating}
    <img src={data.titlePhoto} alt='Pic' width={300} />
    Rank: {data.rank}
    </div>
  )
}

export default Github

export const githubLoader = async () => {
  const response = await fetch(`https://codeforces.com/api/user.info?handles=kvivekcodes&checkHistoricHandles=false`)
  return response.json();
}

