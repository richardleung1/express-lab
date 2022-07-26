require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8000

const fruits = ['Dragonfruit', 'Lychee', 'Durian', 'Passion Fruit', 'Star fruit', 'Prickly Pear', 'Guava', 'Longan', 'Kumquat']
const descriptions = ['cool', 'delicious', 'king', 'interesting', 'awesome', 'refreshing', 'juicy', 'sweet', 'tarty']
const fruitImgs = ['https://cdn.shopify.com/s/files/1/1294/9917/products/image_fc8a7467-0b79-4a0a-87b7-019b59264e8f_1500x.jpg?v=1571681688', 'https://www.tastingtable.com/img/gallery/everything-you-need-to-know-about-lychee-fruit/l-intro-1648012156.jpg', 'https://img.freepik.com/premium-photo/fresh-durian-durio-zibthinus-murray-sack-old-wood-background-king-fruit-from-thailand-summer-season_34435-4015.jpg?w=2000', 'https://www.thespruceeats.com/thmb/-L-Svnj0DqXTf8C2sidDpcO-42o=/2667x2000/smart/filters:no_upscale()/passion-fruit-maracuya-3029292-d446098c547041d18eaec6c292a0974c.jpg','https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/11_exotic_fruits_you_should_try_slideshow/1800ss_getty_rf_star_fruit_carambola.jpg?resize=652px:*&output-quality=75', 'https://tucsonfoodie.com/wp-content/uploads/2019/08/TF-prickly-pear-fruit-5725.jpg', 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/im_landscape_100/public/2021-07/guava%C2%A9iStock.jpg.webp?itok=mPJ3vy92', 'http://cdn.shopify.com/s/files/1/0558/6124/8152/products/Fresh-peeled-longan-fruits.jpg?v=1623948493', 'https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Nagami_Kumquat_5_FGT_650x.jpg?v=1638218855']

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', { title: 'Index', message: 'Welcome to Exotic Fruits' })
})

app.get('/home', (req, res) => {
    res.redirect('/')
})

app.get('/about', (req, res) => {
    res.send(`<h1>Exotic fruits are fruits which are not native and that are cultivated outside, available at their place of origin. Some exotic fruits are tropical.</h1>`)
})

app.get('/fruits/:indexOfFruit', (req, res) => {
    res.render('fruit', { title: fruits[req.params.indexOfFruit], message: `${fruits[req.params.indexOfFruit]} is ${descriptions[req.params.indexOfFruit]}`, img: fruitImgs[req.params.indexOfFruit]})
})

app.listen(port,() => {
    console.log('listening on port' , port)
})