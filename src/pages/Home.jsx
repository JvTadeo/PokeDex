import React, { useEffect, useState } from 'react'
//Hooks
import usePokeApi from '../hook/usePokeApi'
//Componnets
import CardsPokemon from '../components/CardsPokemon'
import Loading from '../components/Loading'

const Home = () => {
    const {pokemon, loading, error} = usePokeApi()                
  return (
    <div>                                
        {loading ? (
          <div className='flex justify-center'>
            <Loading/>
          </div>
        ) : (             
          <div className='mx-3'>
            <CardsPokemon pokemon={pokemon}/>                            
          </div>
        )}
    </div>  
  )
}

export default Home
