// fetch("https://swapi.tech/api/people/1/")
// .then(res =>{
//     console.log("RESOLVED", res)
//     console.log("Blank")
//     return res.json() })
//     .then((data)=> 
//         console.log("JSON done", data))
//     .catch(e =>{
//       console.log("Error!",e)
// })


const loadStarWarsChars = async() => {
    try{ 
    const res = await fetch("https://swapi.tech/api/people/1/")
    const data = await res.json();
    console.log(data);

    const res2 = await fetch("https://swapi.tech/api/people/2/")
    const data2 = await res2.json();
    console.log(data2)

    } catch(e){
        console.log("Error",e)
    }


    
};

loadStarWarsChars()

