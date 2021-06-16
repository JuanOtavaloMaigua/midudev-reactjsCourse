import React, { useState, useEffect } from 'react'
import ListOfGifs from '../../Components/ListOfGifs'
import getGifs from '../../services/getGifs'

export default function SearchResults({ params }){
    const { keyword } = params
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] =  useState([])
 
    useEffect(function(){
      setLoading(true)
      getGifs({keyword}).then(gifs => 
        {
          setGifs(gifs)
          setLoading(false)
        })
    },[keyword]) // esta dependencia dice que cada vez que cambia keyword debe susceder el efecto


    return(
        <div>
            {loading 
                ? <h1>CARGANDO!!!</h1>
                : <ListOfGifs gifs={gifs}/>
            }
        </div>
    )
}