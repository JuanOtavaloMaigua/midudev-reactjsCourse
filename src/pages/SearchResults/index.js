import React, { useState, useEffect } from 'react'
import ListOfGifs from '../../Components/ListOfGifs'
import getGifs from '../../services/getGifs'
import { useGifs } from '../../hooks/useGifs'

export default function SearchResults({ params }){
    const { keyword } = params
    const { loading, gifs } = useGifs({ keyword })
    
    return(
        <div>
            {loading 
                ? <h1>CARGANDO!!!</h1>
                : <ListOfGifs gifs={gifs}/>
            }
        </div>
    )
} 