
const form = document.querySelector('#searchForm')
const imageContainer = document.createElement('div')
document.body.append(imageContainer)

form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value

    imageContainer.innerHTML = "";
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    console.log(res.data)
    displayImages(res.data)
    // form.elements.query.value = "";

    
})

const displayImages = (shows) =>{
    
    for(let result of shows){
        if (result.show.image){
            const img = document.createElement('IMG')
            img.src = result.show.image.medium
            imageContainer.append(img)

        }
       

    }
}

