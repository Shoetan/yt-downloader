const express = require('express');
const app = express ()
require('dotenv').config()
const PORT = 8080
const cors = require('cors')
const axios = require('axios')

let data

app.use(cors())


app.get('/', (req,res)=>{

    /* Options of the get request */

    const options = {
        method: 'GET',
        url: 'https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess',
        params: {
          url: 'https://www.youtube.com/watch?v=6qeT4rvcak0',
          format: 'mp3',
          responseFormat: 'json',
          lang: 'en'
        },
        headers: {
          'X-RapidAPI-Key': process.env.API_KEY,
          'X-RapidAPI-Host': 't-one-youtube-converter.p.rapidapi.com'
        }
      }
   /* using axios to make the api call */
      axios.request(options).
      then((response) =>{

        data = response.data
        
      }).
      catch((err) =>{
        console.log(err.message);
      })

    res.json(data)
})

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})