import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext"

export function useGifs({ keyword } = { keyword: null}){
    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} =  useContext(GifsContext)

    useEffect(function(){
      setLoading(true)
      //recuperamos la keyword del local storage
      const keywordToUse = keyword || localStorage.getItem('lastKeyword')

      getGifs({keyword: keywordToUse})
        .then(gifs => 
        {
          setGifs(gifs)
          setLoading(false)
          // guardamos la keyword en el local storge
          localStorage.setItem('lastKeyword', keyword)
        })
    },[keyword, setGifs])

    return {loading, gifs}
}
