import axios from 'axios'
import { useState } from 'react'
import React, {useEffect} from 'react'
import PokeCard from './components/PokeCard/index'
import "./styles.css";


const App = () => {

  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")


  
  const getPokemons = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        console.log(response.data.results)
         setPokeList(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
     getPokemons()
  }, [])

  const changePokeName = event => {
    console.log(event.target.value)
    setPokeName(event.target.value)
  }


  return (
    <div>
      <select onChange ={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map((pokemon) => {
            return (
              <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
            )
          })}
      </select>

      {pokeName && <PokeCard pokeName={pokeName}/>}
    </div>
  )
}


export default App
