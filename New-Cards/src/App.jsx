import { useState } from 'react'
import './App.css'
import Update from './assets/Update/Update'
import Gener from './assets/popular/Gener'

function App() {
 const category=[
  {
    id:0,
    category:"Popular",
    name:"knock-knock",
    year:2015,
  },
  // {
  //   id:1,
  //   category:"Comedyr",
  //   name:"Jungle-safari",
  //   year:2015,
  // },
  // {
  //   id:2,
  //   category:"Action",
  //   name:"Sniper",
  //   year:2015,
  // },
 ]
 const[selectAction, setSelectedAction]=useState("")


  return (
    <>
      <Update lists={category}  />
      <Gener />
      

    </>
  )
}

export default App
