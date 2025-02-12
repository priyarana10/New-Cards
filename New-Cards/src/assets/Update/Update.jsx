import React from 'react'
import "./Update.css"
const Update = ({lists}) => {
    console.log(lists);
    
    return (
        <>
            <div className="sidenav">
                <div className="search-container">
                    <form action="/action">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit">
                        </button>
                    </form>
                </div>
                <div className="side-link">
                    {lists.map((index ,cards)=>(
                        
                    <ul className="side-links" key={index} >
                        <li>
                            <a href="" className="side-items">{cards.category}</a>
                        </li>
                        
                    </ul>
                ))}
                </div>


            </div >
        </>
    )
}

export default Update