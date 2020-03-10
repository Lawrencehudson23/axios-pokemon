import React,{ useState } from 'react';
import axios from 'axios';

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    
    function getPokemons() {
        axios
          .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
          .then(response => setPokemons(response.data.results)
            
            )
          .catch(console.log);
    }
    return (
        <>
            <button onClick={getPokemons}>Fetch Pokemons!</button>

            <ul>
                {pokemons.map((pokemon,i)=>(
                    <li key={i}>{pokemon.name}</li>
                ))}
                

            </ul>
        </>
    );
}

export default Pokemons;
