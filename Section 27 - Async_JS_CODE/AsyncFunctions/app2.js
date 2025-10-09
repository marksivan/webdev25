const login = async (username, password) => {
    if(!username || !password) throw 'Missing credentials';
    if (password === "testpassword") return 'Welcome';
    throw 'Invalid password'
}


login('adfdfd','testpassword')
.then(msg =>{
    console.log("Logged in")
    console.log(msg)
})
.catch(err =>{
    console.log("Error")
    console.log(err)
})


const delayedColorChange  = (color, delay) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);

    })
}
async function rainbow(){
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "ALL Done"

}
rainbow().then(()=> console.log("End of rainbow"))