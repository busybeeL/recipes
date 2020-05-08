const express = require('express');
const Handlebars = require("handlebars");
const hbs = require('hbs');

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.set('view engine', 'hbs');
app.engine('html', require('hbs').__express);

hbs.registerHelper('loud', function(aString){
    return aString.toUpperCase()
})

app.get('/', (req, res) => {
    res.render('recipes.html', {
        mainColor: "mainColor",
        title: "Jiwoo's recipes",
        greeting: 'Welcome!',
        menu: [
            {
                menuName: 'home',
                url: 'index.html'
            },
            {
                menuName: 'about',
                url: 'about.html'
            },
            {
                menuName: 'recipes',
                url: 'recipes.html'
            },
            {
                menuName: 'contact',
                url: 'contact.html'
            },
        ],
        blogContents: [
            {
                title: 'Seaweed soup',
                description: 'It is pure seaweed soup for birthday!',
                author: 'Jiwoo',
                data: 'Setember 24, 2019'
            },
            {
                title: 'Spicy chicken stew(aka Dakgalbi)',
                description: 'One of my fabourite recipe with typical Korean souce!',
                author: 'JIJI',
                data: 'Setember 18, 2019'
            },
            {
                title: 'Pork belly bbq',
                description: 'South Korean style pork barbeque!',
                author: 'Jiwoo',
                data: 'August 24, 2019'
            },
            {
                title: 'Vegetable + beef porridge',
                description: 'It will strength you up when you are ill.',
                author: 'Jiwooooung',
                data: 'July 8, 2019'
            }
        ]
    })
})

app.get('/time', (req, res) => {
    res.render('time.html', {
        currentTime: Date.now()
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)) 


