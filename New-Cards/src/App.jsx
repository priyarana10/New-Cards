import { useState } from 'react'
import './App.css'
import Update from './assets/Update/Update'
import Gener from './assets/popular/Gener'

function App() {
 const category=[
  {
    id:0,
    category:"Popular",
    
  },
  {
    id:1,
    category:"Adventure",
   
  },
  {
    id:2,
    category:"Action",
   
  },
  {
    id:3,
    category:"Horror"
  },
  {
    id:4,
    category:"Cartoon movies"
  }
 ]

 const movies=[
  {
    images:"https://tse1.mm.bing.net/th?id=OIP.hR55OUGxvYtKh72wspebNwHaJQ&pid=Api&P=0&h=180",
    category:[0,2],
    name:"Flash",
    year:"2021",
  },
  {
    images:"https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg",
    category:[0,2],
    name:"Ant-Man",
    year:"2020",
  },
  {
    images:"https://tse1.mm.bing.net/th?id=OIP.EQP8drgtWynmb93_uraoTAHaKS&pid=Api&P=0&h=180",
    category:[0,2],
    name:"Hulk",
    year:"2019",
  },
  {
    images:"https://wallpapers.com/images/hd/movie-pictures-103khp28i1gjz4b5.jpg",
    category:[0,1],
    name:"Wood",
    year:"coming soon ",
  },
  {
    images:"https://assets.mycast.io/posters/spider-man-4-2024-fan-casting-poster-255071-medium.jpg?1667341872",
    category:[0,2],
    name:"Spider-Man",
    year:"2024",
  },
  {
    images:"https://assets.website-files.com/5bf1c2ccde18dd05bd430ccc/5bf1c32c017c21412909f273_598191033fd40e0001129b77_horror-blog-conjuring.jpeg",
    category:[0,3],
    name:"The Conjuring",
    year:"2022",
  },
  {
    images:"https://m.media-amazon.com/images/M/MV5BZDBkZjJmYjQtYWFkNy00YjdiLTljMDUtYzc1OGZiZDkwMTRiXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg",
    category:[0,2],
    name:"Davara",
    year:"2024",
  },
  {
    images:"https://images.nintendolife.com/e8dce11c4e012/mario.large.jpg",
    category:[0,4],
    name:"The super Mario Movie",
    year:"2023",
  },
  {
    images:"https://m.media-amazon.com/images/M/MV5BZjY2MmI1ZWItNmU0Yy00NTdkLWJiYmQtNzFlZWNlMzkxZTZjXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg",
    category:[0,2,1],
    name:"Brahmastra",
    year:"2022",
  },
  {
    images:"https://i.pinimg.com/originals/c4/5c/97/c45c9707435f6dbf95ca47c9b24998dc.jpg",
    category:[0,1],
    name:"Gravity",
    year:"Coming Soon",
  },
  {
    images:"https://www.filmibeat.com/ph-big/2023/01/animal-2023_167264941510.jpg",
    category:[0,2],
    name:"Animal",
    year:"2023",
  },
  {
    images:"https://www.dvdsreleasedates.com/posters/800/N/Napoleon-2023-movie-poster.jpg",
    category:[0,2],
    name:"Napoleon",
    year:"Coming soon",
  },
  {
    images:"https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1600041306046-ZKYYQ868MULDEN30MD3C/New+Poster+Art+For+THE+BATMAN5",
    category:[0,2],
    name:"The  Batman",
    year:"2017",
  },
  {
    images:"https://tse1.mm.bing.net/th?id=OIP.7UT2TtBd9Wtc2RCb91QJdwHaKx&pid=Api&P=0&h=180",
    category:[0,2],
    name:"Hanuman",
    year:"2024",
  },
  {
    images:"https://www.rvcj.com/wp-content/uploads/2018/01/kahaani-poster.jpg",
    category:[0,2],
    name:"Kahani",
    year:"2012",
  },
  {
    images:"https://1.bp.blogspot.com/-DgcNetYvpcs/XcpPnCdmNTI/AAAAAAABD-8/h8qQCqBcbrECz0x3p6O5KXk9XALi0Fi1ACLcBGAsYHQ/s1600/tanhaji-movie-poster.jpg",
    category:[0,2],
    name:"Tanaji",
    year:"2020",
  },
  {
    images:"http://webneel.com/daily/sites/default/files/images/daily/01-2019/15-movie-poster-design-kahaani2-bollywood-hindi-prathoolnt.jpg",
    category:[0,2],
    name:"Kahani 2",
    year:"2022",
  },
  {
    images:"https://tse4.mm.bing.net/th?id=OIP.dI4qTSwZ_GK2KNCDjBIcbAHaK-&pid=Api&P=0&h=180",
    category:[0,3],
    name:"The Host",
    year:"2012",
  },
  {
    images:"https://cdn.flickeringmyth.com/wp-content/uploads/2018/04/211-poster.jpg",
    category:[0,3],
    name:"211",
    year:"2018",
  },
  
 ]
//  const[selectAction, setSelectedAction]=useState("")


  return (
    <>
      <Update lists={category}  />
      <Gener movies={movies} />
      

    </>
  )
}

export default App
