import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SearchContext } from '../context/SearchContext';

const CardsPokemon = ({pokemon}) => {

  const {search} = useContext(SearchContext);  

  const filteredPokemon = pokemon && search ? pokemon.filter((poke) => poke.name.toLowerCase().includes(search.toLowerCase())) : pokemon

  return (
    <div className='bg-white rounded-lg w-full py-3'>
      <ul className='flex flex-row items-center w-full flex-wrap gap-5 justify-center'>        
            {filteredPokemon?.map((poke) => (              
              <Link to={`pokemon/${poke.id}`} state={{poke}} key={poke.id}>                
                <li key={poke.id} className='flex flex-col justify-center items-center align-middle max-w-[108px] max-h-auto rounded-lg bg-white shadow-inner-custom'>
                    <p className='text-[#666666] text-sm py-1 w-full text-right pr-2'>#{poke.id.toString().padStart(3, '0')}</p>
                    <img className='object-contain max-w-[50%]' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}/>  
                    <p className=' bg-[#EFEFEF] object-cover w-full text-center rounded-md py-3'>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</p>                            
                </li>
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default CardsPokemon
