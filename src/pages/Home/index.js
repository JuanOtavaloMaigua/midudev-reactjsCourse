import React, { useState } from 'react'
import { Link , useLocation } from "wouter"

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"]

export default function Home(){
    const [ keyword, setKeyword ] = useState("")
    const [ path, setLocation ] = useLocation()

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