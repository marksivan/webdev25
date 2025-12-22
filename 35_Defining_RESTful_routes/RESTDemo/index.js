const express = require('express')
const app = express()
const PORT = 3000;
const path = require('path')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')




app.get('/tacos', (req, res) =>{
    res.send("GET /tacos respnose")

})


app.post('/tacos', (req, res) =>{
    res.send("POST /tacos respnose")

})


// Our fake database:
let comments = [
    {
        // id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        // id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        // id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        // id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]



app.get('/comments', (req, res) =>{
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) =>{
    res.render('comments/new')

})

app.post('/comments', (req, res) =>{
    console.log(req.body)
    const {username, comment} = req.body
    comments.push({username, comment})

    res.redirect('/comments')

}
)

app.get('/tacos', (req, res) =>{
    res.send("GET /tacos response")
})

app.listen(PORT, () =>{
    console.log(`On Port ${PORT}`)
})

