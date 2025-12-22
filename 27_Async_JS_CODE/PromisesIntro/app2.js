const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

fakeRequestPromise('yelp.com/api/coffee/page1')
.then(()=>{
    console.log("It worked!!! (page1)")
    return fakeRequestPromise('yelp.com/api/coffee/page2')
}).then(()=>{
    console.log("It worked!!!(page2")
    return fakeRequestPromise('yelp.com/api/coffee/page3')
}).then(()=>{
    console.log("It worked!!1 (page3")
})
.catch(()=>{
    console.log("A request failed!!")
})
