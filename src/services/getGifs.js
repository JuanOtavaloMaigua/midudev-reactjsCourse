
const apiKey = 'lRL46ToWkzuLudeNIOzoRP47pjWShwVZ'

export default function getGifs({keyword ='elon musk'}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=5&offset=0&rating=g&lang=en`
    return fetch(apiURL)
    .then(res=> res.json())
    .then(response => {
      const { data } = response
      console.log(data)
      const gifs = data.map( image => {
            const {images, id, title} = image
            const { url } = images.downsized_large
            return {id, title, url}
        })

        return gifs
    })
}
