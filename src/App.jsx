import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import "./App.css"
import { useEffect } from 'react'
import axios from "axios"
import CharacterGrid from './components/CharacterGrid'
import Search from './components/Search'


function App() {
  const [items,setItems] =useState([])
  const [isLoading,setIsLoading] =useState(true)
  const[query,setQuery] =useState('')

  useEffect(()=>{
    const fetchData=async () =>{

      const result =await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data)
      setIsLoading(false)
      setItems(result.data)
    }
    fetchData()
  },[query])

  return (
    <div className="App">
      <Header/>
      <Search getQuery={(q)=>setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  )
}

export default App
