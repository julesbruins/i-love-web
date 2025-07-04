// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express, { response } from 'express'
// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// Zodat we bestanden en mappen in kunnen lezen
import { readdir, readFile } from 'node:fs/promises'


// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 


// markdowns opvragen
// import { marked } from 'marked'
// const markedUp = marked.parse(fileContents)

// const files = await readdir('markdowns')
//     console.log(files)

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')





app.get('/', function (request, response) {
    response.render('home.liquid')
})

app.get('/about', function (request, response) {
    response.render('about.liquid')
})

// PORTFOLIO
app.get('/portfolio', function (request, response) {
    response.render('portfolio.liquid')
})
app.get('/portfolio/drukwerkdeal', function (request, response) {
    response.render('drukwerkdeal.liquid')
})
app.get('/portfolio/dda-agency', function (request, response) {
    response.render('dda.liquid')
})
app.get('/portfolio/drop-heal-UE', function (request, response) {
    response.render('d&h-UE.liquid')
})
app.get('/portfolio/drop-heal-PUI', function (request, response) {
    response.render('d&h-PUI.liquid')
})



// OFFLINE
app.get('/portfolio2', function (request, response) {
    response.render('portfolio2.liquid')
})

app.get('/learning-journal', function (request, response) {
    response.render('learningjournal.liquid', {files: files})
})
app.get('/test', function (request, response) {
    response.render('test.liquid')
})


// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
    // Toon een bericht in de console en geef het poortnummer door
    console.log(`Application started on http://localhost:${app.get('port')}`)
  })