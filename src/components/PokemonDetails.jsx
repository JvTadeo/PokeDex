import { useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

import Loading from "./Loading";
import usePokeApi from "../hook/usePokeApi";

const PokemonDetails = () => {
  const state = useLocation();  
  const pokeData = state.state.poke
  const [pokemon, setPokemon] = useState(null);
  const [color, setColor] = useState(""); 
  const [secondColor, setSecondColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const maxStats = 255;
  //Object Pokemons Type Colors
  const bgColorPokemon = {
    bug: 'bg-[#A7B723]',
    dark: 'bg-[#75574C]',
    dragon: 'bg-[#7037FF]',
    electric: 'bg-[#F9CF30]',
    fairy: 'bg-[#E69EAC]',
    fighting: 'bg-[#C12239]',
    fire: 'bg-[#F57D31]',
    flying: 'bg-[#A891EC]',
    ghost: 'bg-[#70559B]',
    normal: 'bg-[#AAA67F]',
    grass: 'bg-[#74CB48]',
    ground: 'bg-[#DEC16B]',
    ice: 'bg-[#9AD6DF]',
    poison: 'bg-[#A43E9E]',
    psychic: 'bg-[#FB5584]',
    rock: 'bg-[#B69E31]',
    steel: 'bg-[#B7B9D0]',
    water: 'bg-[#6493EB]',
  };
  const textColorPokemon = {
    bug: 'text-[#A7B723]',
    dark: 'text-[#75574C]',
    dragon: 'text-[#7037FF]',
    electric: 'text-[#F9CF30]',
    fairy: 'text-[#E69EAC]',
    fighting: 'text-[#C12239]',
    fire: 'text-[#F57D31]',
    flying: 'text-[#A891EC]',
    ghost: 'text-[#70559B]',
    normal: 'text-[#AAA67F]',
    grass: 'text-[#74CB48]',
    ground: 'text-[#DEC16B]',
    ice: 'text-[#9AD6DF]',
    poison: 'text-[#A43E9E]',
    psychic: 'text-[#FB5584]',
    rock: 'text-[#B69E31]',
    steel: 'text-[#B7B9D0]',
    water: 'text-[#6493EB]',
  };  
  const {getPokeData, loading, error} = usePokeApi();

  //Setting Color type 
  const handlePrincipalColorType = (type) => {
    switch(type){
      case 'bug':
        setColor(bgColorPokemon.bug);        
        setTextColor(textColorPokemon.bug);
      break;
      case 'dark':
        setColor(bgColorPokemon.dark);
        setTextColor(textColorPokemon.dark);
      break;
      case 'dragon':
        setColor(bgColorPokemon.dragon);
        setTextColor(textColorPokemon.dragon);
      break;
      case "electric":
        setColor(bgColorPokemon.electric);
        setTextColor(textColorPokemon.electric);        
      break;
      case "fairy":
        setColor(bgColorPokemon.fairy);
        setTextColor(textColorPokemon.fairy);
      break;
      case "fighting":
        setColor(bgColorPokemon.fighting);
        setTextColor(textColorPokemon.fighting);
      break;
      case "fire":
        setColor(bgColorPokemon.fire);
        setTextColor(textColorPokemon.fire);
      break;
      case "flying":
        setColor(bgColorPokemon.flying);
        setTextColor(textColorPokemon.flying);
      break;
      case "ghost":
        setColor(bgColorPokemon.ghost);
        setTextColor(textColorPokemon.ghost);
      break;
      case "grass":
        setColor(bgColorPokemon.grass);
        setTextColor(textColorPokemon.grass);
      break;
      case "ground":
        setColor(bgColorPokemon.ground);
        setTextColor(textColorPokemon.ground);
      break;
      case "ice":
        setColor(bgColorPokemon.ice);
        setTextColor(textColorPokemon.ice);
      break;
      case "poison":
        setColor(bgColorPokemon.poison);
        setTextColor(textColorPokemon.poison);
      break;
      case "psychic":
        setColor(bgColorPokemon.psychic);
        setTextColor(textColorPokemon.psychic);
      break;
      case "rock":
        setColor(bgColorPokemon.rock);
        setTextColor(textColorPokemon.rock);
      break;
      case "steel":
        setColor(bgColorPokemon.steel);
        setTextColor(textColorPokemon.steel);
      break;
      case 'water':
        setColor(bgColorPokemon.water);
        setTextColor(textColorPokemon.water);
      break;
      default:
        setColor(bgColorPokemon.normal);
        setTextColor(textColorPokemon.normal);
    }
  }

  const handleSecondColorType = (type) => {
    switch(type){
      case 'bug':
        setSecondColor(bgColorPokemon.bug);                
      break;
      case 'dark':
        setSecondColor(bgColorPokemon.dark);        
      break;
      case 'dragon':
        setSecondColor(bgColorPokemon.dragon);        
      break;
      case "electric":
        setSecondColor(bgColorPokemon.electric);        
      break;
      case "fairy":
        setSecondColor(bgColorPokemon.fairy);        
      break;
      case "fighting":
        setSecondColor(bgColorPokemon.fighting);        
      break;
      case "fire":
        setSecondColor(bgColorPokemon.fire);        
      break;
      case "flying":
        setSecondColor(bgColorPokemon.flying);        
      break;
      case "ghost":
        setSecondColor(bgColorPokemon.ghost);        
      break;
      case "grass":
        setSecondColor(bgColorPokemon.grass);        
      break;
      case "ground":
        setSecondColor(bgColorPokemon.ground);        
      break;
      case "ice":
        setSecondColor(bgColorPokemon.ice);        
      break;
      case "poison":
        setSecondColor(bgColorPokemon.poison);        
      break;
      case "psychic":
        setSecondColor(bgColorPokemon.psychic);        
      break;
      case "rock":
        setSecondColor(bgColorPokemon.rock);        
      break;
      case "steel":
        setSecondColor(bgColorPokemon.steel);        
      break;
      case 'water':
        setSecondColor(bgColorPokemon.water);        
      break;
      default:
        setSecondColor(bgColorPokemon.normal);        
    }
  }

  //GetPokeData
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokeData(pokeData.url);
        setPokemon(data);
      } catch (e) {
        setError(e);
      }
    };
    fetchData();
  }, []);      
  //Get Colors
  useEffect(() => {
    if(pokemon){                                    
        const currenType = pokemon.types[0].type.name;
        handlePrincipalColorType(currenType)
                
        if(Object.keys(pokemon.types).length > 1){
          const secondType = pokemon.types[1].type.name;
          handleSecondColorType(secondType);          
        }                          
    }    
  }, [pokemon])  

  return (            
    <div className={`flex flex-col justify-center items-center ${color} rounded-xl`}>        
    {pokemon ? (
      <>
        <div className={`flex flex-col w-full`}>          
          <div className="flex flex-row justify-around py-3 items-center text-white">
            <p className="font-bold text-3xl">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
            <p className="font-bold text-sm">#{pokeData.id.toString().padStart(3, '0')}</p>                  
          </div>
          <div className="flex justify-center w-full">
            <img  className=' max-w-[50%]' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}/>  
          </div>
        </div>
        <div className="w-[95%] bg-white flex flex-col rounded-lg my-2 items-center py-2">
          <div className="my-3 flex flex-row gap-2 " /* Types */>
            <p className={`${color} text-white p-2 rounded-2xl font-medium`}>{pokemon?.types[0].type.name.charAt(0).toUpperCase() + pokemon?.types[0].type.name.slice(1)}</p>
            {pokemon.types.length >= 2 && (
              <p className={`${secondColor} text-white p-2 rounded-2xl font-medium`}>{pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon?.types[1].type.name.slice(1)}</p>
            )}
          </div>
          <div className={`${textColor} font-bold text-xl`} /* About*/>
            <h2>About</h2>
          </div>     
          <div className="grid grid-cols-3 gap-3 items-center text-base font-light w-full justify-center py-5 divide-x-2" /* About - Stats */ >            
            <div className="flex flex-col items-center">
              <div className="flex flex-row gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                  <path d="M4.28333 13.0001H13.05L12 5.66675H5.33333L4.28333 13.0001ZM8.66667 4.66675C8.95556 4.66675 9.19444 4.56953 9.38333 4.37508C9.57222 4.18064 9.66667 3.94453 9.66667 3.66675C9.66667 3.37786 9.57222 3.13897 9.38333 2.95008C9.19444 2.76119 8.95556 2.66675 8.66667 2.66675C8.38889 2.66675 8.15278 2.76119 7.95833 2.95008C7.76389 3.13897 7.66667 3.37786 7.66667 3.66675C7.66667 3.94453 7.76389 4.18064 7.95833 4.37508C8.15278 4.56953 8.38889 4.66675 8.66667 4.66675ZM10.4 4.66675H12C12.2556 4.66675 12.4778 4.7473 12.6667 4.90841C12.8556 5.06953 12.9667 5.27786 13 5.53341L14.0333 12.8667C14.0778 13.1667 14.0028 13.4306 13.8083 13.6584C13.6139 13.8862 13.3611 14.0001 13.05 14.0001H4.28333C3.97222 14.0001 3.71945 13.8862 3.525 13.6584C3.33056 13.4306 3.25556 13.1667 3.3 12.8667L4.33333 5.53341C4.36667 5.27786 4.47778 5.06953 4.66667 4.90841C4.85556 4.7473 5.07778 4.66675 5.33333 4.66675H6.93333C6.84444 4.51119 6.77778 4.35286 6.73333 4.19175C6.68889 4.03064 6.66667 3.85564 6.66667 3.66675C6.66667 3.11119 6.86111 2.63897 7.25 2.25008C7.63889 1.86119 8.11111 1.66675 8.66667 1.66675C9.22222 1.66675 9.69444 1.86119 10.0833 2.25008C10.4722 2.63897 10.6667 3.11119 10.6667 3.66675C10.6667 3.85564 10.6444 4.03064 10.6 4.19175C10.5556 4.35286 10.4889 4.51119 10.4 4.66675ZM4.28333 13.0001H13.05H4.28333Z" fill="#1D1D1D"/>
                </svg>
                <p>{pokemon.weight/10} Kg</p>
              </div>
              <p className="text-xs font-light">Weight</p>
            </div>                        
            <div className="flex flex-col items-center h-full justify-center">
              <div className="flex flex-row items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                  <path d="M4.5 2.33325C4.5 2.06659 4.6 1.83325 4.8 1.63325C5 1.43325 5.23333 1.33325 5.5 1.33325L11.5 1.33325C11.7556 1.33325 11.9861 1.43325 12.1917 1.63325C12.3972 1.83325 12.5 2.06659 12.5 2.33325V13.6666C12.5 13.9333 12.3972 14.1666 12.1917 14.3666C11.9861 14.5666 11.7556 14.6666 11.5 14.6666H5.5C5.23333 14.6666 5 14.5666 4.8 14.3666C4.6 14.1666 4.5 13.9333 4.5 13.6666L4.5 2.33325ZM5.5 2.33325L5.5 13.6666H11.5V11.4999H8.5V10.4999H11.5V8.49992H8.5V7.49992H11.5V5.49992H8.5V4.49992H11.5V2.33325L5.5 2.33325ZM8.5 4.49992V5.49992V4.49992ZM8.5 7.49992V8.49992V7.49992ZM8.5 10.4999V11.4999V10.4999Z" fill="#1D1D1D"/>
                </svg>
                <p>{pokemon.height/10} m</p>
              </div>
              <p className="text-xs font-light">Height</p>
            </div>
            <div className="flex flex-col items-center text-center gap-1"> 
              <p>{pokemon.moves[0].move.name.charAt(0).toUpperCase() + pokemon.moves[0].move.name.slice(1)}</p>
              <p>{pokemon.moves[1].move.name.charAt(0).toUpperCase() + pokemon.moves[1].move.name.slice(1)}</p>
              <p className="text-xs font-light">Moves</p>
            </div>
          </div>   
          <p>Base Stats</p>
          <div className="flex flex-row justify-evenly w-full h-full">
            <div className="px-4 h-full">
              <p>HP</p>
              <p>ATK</p>
              <p>DEF</p>
              <p>SATK</p>
              <p>SDEF</p>
              <p>SPD</p>
            </div>
            <div className="flex flex-row h-full w-full px-3 gap-3">
              <div className="flex flex-col">
                {pokemon?.stats.map((stats, index) => (<p key={index}>{stats.base_stat}</p>))}
              </div>
              <div className="flex flex-col w-full items-center align-middle justify-center gap-3.5">
              {pokemon?.stats.map((stats, index) => (
                <div key={index} className=" w-full bg-gray-200 rounded-full h-2.5">
                  <div className={` ${color} h-full rounded-full`} style={{width:Math.round((stats.base_stat / 255) * 100)+ '%'}}></div>
                </div>))}
              </div>
            </div>            
          </div>
        </div>
      </>
      )
        :
      (
        <div className='flex justify-center'>
          <Loading/>
        </div>
      )}
    </div>
  )
}

export default PokemonDetails
