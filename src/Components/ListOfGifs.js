import React, { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import Gif from './Gif'

export default function ListOfGifs({ params }){
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

    if(loading) return <i>CARGANDO !!!</i>

    return <div>
      {
        gifs.map((({title, id, url}) => 
        <Gif title={title} 
              id={id} 
              url={url}
              key={id}/>  
        ))
      }
    </div>
}