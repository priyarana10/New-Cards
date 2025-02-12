import React from 'react'
import "./Gener.css"
const Gener = ({movies}) => {
  return (
    <>
    <div className="container">
    <div className="main">
        {movies.map((cards)=>(
            <div className="lists">
            <img src={cards.images} alt="" className="photos" />
            <h3 className="names">{cards.name}</h3>
            <p className="years">{cards.year}</p>
        </div>))}
        
    </div></div>
    </>
  )
}

export default Gener