import React, {useContext} from 'react'
import GifsContext from '../../context/GifsContext'
import Gif from '../../Components/Gif'

export default function Detail({params}){

    const {gifs} = useContext(GifsContext)

    const gif = gifs.find( singleGif =>
        {
            if (singleGif.id === params.id){
                return singleGif
            }
        }
    )
    
    console.log('this is gif: ',gif)
    return(
        <div>
            <h1>GIF con id {params.id}</h1> 
            <Gif {...gif}/>
        </div>
    )
}