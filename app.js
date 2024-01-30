// Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 3000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/layout')
app.set('view engine', 'ejs')

// Routes
app.get('', (req, res) => {
    res.render('index', { title: 'CCW - Home Page' })
})

app.get('/aboutus', (req, res) => {
    res.render('aboutus', { title: 'CCW - About Page' })
})

app.get('/franchise', (req, res) => {
    res.render('franchise', { title: 'CCW - franchise Page' })
})

app.get('/contactus', (req, res) => {
    res.render('contactus', { title: 'CCW - contact Page' })
})

app.get('/blog', (req, res) => {
    res.render('blog', { title: 'CCW - Blog Page' })
})

//routes for menu section
app.get('/we_offer/large', (req, res) => {
    res.render('../views/we_offer/large', { title: "CCW - waffles", layout: '../views/layouts/we_offer' })
})

app.get('/we_offer/medium', (req, res) => {
    res.render('we_offer/medium', { title: "CCW - Waffles", layout: '../views/layouts/we_offer' })
})

app.get('/we_offer/fries', (req, res) => {
    res.render('we_offer/fries', { title: "CCW - fries", layout: '../views/layouts/we_offer' })
})

//routes for all the cards for search
app.get('/search', (req, res) => {
    res.render('search', { title: "CCW - Search" })
})

// routes for the we offer section

app.get('/we_offer/dining', (req, res) => {
    res.render('we_offer/dining', { title: "CCW - Dining", layout: '../views/layouts/we_offer' })
})

app.get('/we_offer/event_hosting', (req, res) => {
    res.render('we_offer/event_hosting', { title: "CCW- Event_hosting", layout: '../views/layouts/we_offer' })
})

app.get('/we_offer/online_orders', (req, res) => {
    res.render('we_offer/online_orders', { title: "CCW - Online Orders", layout: '../views/layouts/we_offer' })
})

app.get('/we_offer/party_hosting', (req, res) => {
    res.render('we_offer/party_hosting', { title: "CCW - Party Hosting", layout: '../views/layouts/we_offer' })
})

// routes for the cards large and description for large waffles

app.get('/large_waffle/item1', (Req, res) => {
    res.render('card_description/item1', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item1', (req, res) => {
    res.render('card_description/item1', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/large_waffle/item2', (Req, res) => {
    res.render('card_description/item2', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item2', (req, res) => {
    res.render('card_description/item2', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/large_waffle/item3', (Req, res) => {
    res.render('card_description/item3', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item3', (req, res) => {
    res.render('card_description/item3', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/large_waffle/item4', (Req, res) => {
    res.render('card_description/item4', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item4', (req, res) => {
    res.render('card_description/item4', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/large_waffle/item5', (Req, res) => {
    res.render('card_description/item5', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item5', (req, res) => {
    res.render('card_description/item5', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/large_waffle/item6', (Req, res) => {
    res.render('card_description/item6', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item6', (req, res) => {
    res.render('card_description/item6', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/large_waffle/item7', (Req, res) => {
    res.render('card_description/item7', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item7', (req, res) => {
    res.render('card_description/item7', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/large_waffle/item8', (Req, res) => {
    res.render('card_description/item8', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item8', (req, res) => {
    res.render('card_description/item8', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/large_waffle/item9', (Req, res) => {
    res.render('card_description/item9', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item9', (req, res) => {
    res.render('card_description/item9', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/large_waffle/item10', (Req, res) => {
    res.render('card_description/item10', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item10', (req, res) => {
    res.render('card_description/item10', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/large_waffle/item11', (Req, res) => {
    res.render('card_description/item11', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item11', (req, res) => {
    res.render('card_description/item11', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/large_waffle/item12', (Req, res) => {
    res.render('card_description/item12', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item12', (req, res) => {
    res.render('card_description/item12', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

// routes for medium waffles and button routes for medium waffles 

app.get('/medium_waffle/item1', (Req, res) => {
    res.render('card_description/item13', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item1', (req, res) => {
    res.render('card_description/item13', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/medium_waffle/item2', (Req, res) => {
    res.render('card_description/item14', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item2', (req, res) => {
    res.render('card_description/item14', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/medium_waffle/item3', (Req, res) => {
    res.render('card_description/item15', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item3', (req, res) => {
    res.render('card_description/item15', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/medium_waffle/item4', (Req, res) => {
    res.render('card_description/item16', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item4', (req, res) => {
    res.render('card_description/item16', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/medium_waffle/item5', (Req, res) => {
    res.render('card_description/item17', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item5', (req, res) => {
    res.render('card_description/item17', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/medium_waffle/item6', (Req, res) => {
    res.render('card_description/item18', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item6', (req, res) => {
    res.render('card_description/item18', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/medium_waffle/item7', (Req, res) => {
    res.render('card_description/item19', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item7', (req, res) => {
    res.render('card_description/item19', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/medium_waffle/item8', (Req, res) => {
    res.render('card_description/item20', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item8', (req, res) => {
    res.render('card_description/item20', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/medium_waffle/item9', (Req, res) => {
    res.render('card_description/item21', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item9', (req, res) => {
    res.render('card_description/item21', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/medium_waffle/item10', (Req, res) => {
    res.render('card_description/item22', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item10', (req, res) => {
    res.render('card_description/item22', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/medium_waffle/item11', (Req, res) => {
    res.render('card_description/item23', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item11', (req, res) => {
    res.render('card_description/item23', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/medium_waffle/item12', (Req, res) => {
    res.render('card_description/item24', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item12', (req, res) => {
    res.render('card_description/item24', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

// routes for fries and description for fries 

app.get('/medium_waffle/item1', (Req, res) => {
    res.render('card_description/item25', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item1', (req, res) => {
    res.render('card_description/item25', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/medium_waffle/item2', (Req, res) => {
    res.render('card_description/item26', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

app.get('/card_description/item2', (req, res) => {
    res.render('card_description/item26', { title: "CCW - Menu", layout: "../views/layouts/we_offer" })
})

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))