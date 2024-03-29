import axios from "axios"
import { useEffect, useState } from "react"


const PokeCard = (props) => {
    
    const [pokemon, setPokemon] = useState({})


    const getPokemon = pokeName => {
       axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(response => {
                console.log(response.data)
                setPokemon(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
 
    useEffect(() => {
        getPokemon(props.pokeName) 
    }, [props.pokeName]) 


    return(
        <div>
            <p>{pokemon && pokemon.name}</p>
            <p>{pokemon && pokemon.weight} kg</p>
            {pokemon.types && pokemon.types[0].type.name}
            {pokemon.sprites && (<img src={pokemon.sprites.front_default} alt={pokemon.name} />)}
        </div>
    )
}

export default PokeCard