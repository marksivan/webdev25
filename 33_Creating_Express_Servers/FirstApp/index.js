const express = require("express")
const app = express()
const PORT = 3000;


// app.use((req, res)=> {
//     console.log("We got a new request");
//     res.send("Hello, we got your request")
// })

app.get('/', (req, res) =>{
    res.send("This is the home page!!")
})

app.get('/r/:subreddit', (req, res) =>{
    const { subreddit} = req.params
    res.send(`<h1>Browsing the ${subreddit} subreddit<h1>`)
})


app.get('/r/:subreddit/:postId', (req, res) =>{
    const { subreddit, postId } = req.params
    res.send(`<h1>Viewing Post ID:  ${postId} on the ${subreddit} subreddit<h1>`)
})


app.post('/', (req, res) =>{
    res.send("Post request to /cats")
})

app.get('/cats', (req, res) =>{
     res.send("MEOW");
})

// working with query strings
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q){
        res.send("nothing found if nothing searched")
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})

// catch non-existent paths
app.get(/(.*)/, (req, res) =>{
     res.send("I don't know that path");
})




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})