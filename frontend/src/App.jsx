import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
const [jokes,setJokes]= useState([])

useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{
    setJokes(response.data)
  }).catch((error)=>{
    console.log("error")
  })
})


  return (
    <>
      <h1>Joke App</h1>
      <h2>Total Jokes : {jokes.length}</h2>
      {
        jokes.map((joke,index)=>{
          return(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>)
        })
      }
    </>
  )
}

export default App
