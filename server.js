const express = require('express');

const app = express();

let images = []

for(let i = 0; i < 200; i++){
  images.push({image:`https://loremflickr.com/${Math.round(420+(Math.random()*200)-100)}/${Math.round(540+(Math.random()*200)-100)}/pill`})
}

app.get('/api/pharm/images', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(images));
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));