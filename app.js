const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json({ extended: true }));

app.get('/search/:id', async function(req, res) {

    let response = await axios.get('http://api.tvmaze.com/shows/' + req.params.id);

    let data = response.data;

    //console.log(response.data);

    let information = [];

    
    information.push({
        "id":  req.params.id,
        "name": response.data.name,
        "type": response.data.type,
        "language": response.data.language,
        "genres": response.data.genres,
        "status": response.data.status,
        "runtime": response.data.runtime,
        "premiered": response.data.premiered,
        "officialSite": response.data.officialSite,
        "rating": response.data.rating,
        "image": response.data.image,
        "summary": response.data.summary
    });


    res.send(information);
    
});

app.listen(3000, () => {
    console.log("Up and running on port 3000!");
});