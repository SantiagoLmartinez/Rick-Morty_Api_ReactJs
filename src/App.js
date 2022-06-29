//import FetchCharacters from "./components/FetchCharacters";
import React,{useEffect, useState} from 'react'

import { NavbarComp } from './components/Navbar'
import PaginationComp from './components/Pagination'
import CharacterComp  from './components/Character'

function App() {
  const urlInitial = 'https://rickandmortyapi.com/api/character'

  const [characters, setCharacters] = useState([])
  
  const [info, setInfo] = useState({})
  
  const FetchCharacters =(url) => {
    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data.results))
        .then(data => {
          setCharacters(data.results)
          setInfo(data.info)
        })
        .catch(error =>console.log('hubo un error ~ ',error))
}

  const onPrevious =() => {
    FetchCharacters(info.prev)
  }
  const onNext =() => {
    FetchCharacters(info.next)
  }

    useEffect(() => {
        FetchCharacters(urlInitial)
    }, []);

    console.log(characters)

  return (
    <div className="App">
      <NavbarComp/>
      <div className='container'>
        <PaginationComp prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      <div>
        <CharacterComp characters={characters}/>
      </div>
      <PaginationComp prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      </div>
    </div>
      
  );
} 


export default App;
