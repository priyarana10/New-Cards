import React from 'react'
import "./Update.css"
const Update = () => {
    const { movies } = {
       
          category: "Popular",
            movieName: [
              { image: "", title: "test Eius provident1", year: "2017" },
              { image: "search.png", title: "test Eius provident2", year: "2017" },
              { image: "", title: "test Eius provident3", year: "2017" },
              { image: "", title: "test Eius provident4", year: "2017" },
              { image: "", title: "test Eius provident", year: "2017" },
              { image: "", title: "test Eius provident", year: "2017" },
              { image: "", title: "test Eius provident", year: "2017" },
              { image: "", title: "test Eius provident", year: "2017" },
              { image: "", title: "test Eius provident", year: "2017" },
              
            ],
        
      }
    
        
    return (
        <>

    
    

            <div class="sidenav">
                <div class="search-container">
                    <form action="/action">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit"><img src="public/sec.png" alt="" />
                        </button>
                    </form>
                </div>
                
{movies.list.map((movie, index) => (
                  <Wrapperdiv  key={index}>
                    
                      <Iconboxh3>{movie.title}</Iconboxh3>
                      <Iconboxp>{movie.description}</Iconboxp>
                   
                  </Wrapperdiv>
                 ))}
                <a href="#" className="side-link">Genres</a>
                <a href="#" className="side-link">Popular</a>
                <a href="#" className="side-link">Action</a>
                <a href="#" className="side-link">Advanture</a>
                <a href="#" className="side-link">Animation</a>
                <a href="#" className="side-link">Biography</a>
                <a href="#" className="side-link">Comedy</a>
                <a href="#" className="side-link">Crime</a>
                <a href="#" className="side-link">Documentary</a>
                <a href="#" className="side-link">Drama</a>
                <a href="#" className="side-link">Family</a>
                <a href="#" className="side-link">Fantasy</a>
                <a href="#" className="side-link">Film-Noir</a>
                <a href="#" className="side-link">History</a>
                <a href="#" className="side-link">Horror</a>
                <a href="#" className="side-link">Music</a>
                <a href="#" className="side-link">Musical</a>
                <a href="#" className="side-link">Mystry</a>

            </div>
        </>
    )
}

export default Update