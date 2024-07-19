import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'

function Github() {
    const {userid} = useParams()

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${userid}`)
        .then((res) => res.json())
        .then((res) => setData(res))
    }, [])
    
  return (
      <div>Github {data && data['public_repos']} Repos</div>
  )
}

export default Github