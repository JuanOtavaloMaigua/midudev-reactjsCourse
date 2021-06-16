import React from 'react'
import './Gif.css'
import { Link } from 'wouter'
export default function Gif({title, id, url}){
    return (
        <Link to={`/gif/${id}`} className='Gif'>
            <img alt={title} src={url}/>
            <h4>{title}</h4>
        </Link>
    )
}