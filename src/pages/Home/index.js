import React, { useEffect, useState } from 'react'
import ListOfGifs from '../../Components/ListOfGifs'
import { Link , useLocation } from "wouter"
import { useGifs } from '../../hooks/useGifs'

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"]

export default function Home(){
    const [ keyword, setKeyword ] = useState()
    const [ path, setLocation ] = useLocation()
    const { loading, gifs } = useGifs()

    const handleSubmmit = evt => {
        evt.preventDefault()
        setLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }


    return(
        <div>
            <form onSubmit={handleSubmmit}>
                <input onChange={handleChange} type="text" value={keyword}/>
                <button>enviar</button>
            </form>
            <h3>Último gif buscado</h3>
            <ListOfGifs gifs={gifs}/>
            <h3> Los gifs más populares</h3>
            <ul>
                {
                    POPULAR_GIFS.map((popularGif)=>{
                        return <li key={popularGif}>
                            <Link to={`/search/${popularGif}`}>
                                Gifs de {popularGif}
                            </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}