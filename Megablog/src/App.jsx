import './App.css'
import {Client} from 'appwrite'

function App() {
  const client = new Client();

  client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('661c2472d7b72de1f329');
  console.log(import.meta.env.VITE_APPWRITE_URL)

  return (
    <>
      <h1>Hello, vivek this side</h1>
    </>
  )
}

export default App
