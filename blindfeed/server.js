const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const app = express();
app.use(history());
app.use('/', serveStatic(path.join(__dirname, '/dist')));
app.get(/./, function(){
    res.sendFile(__dirname + "/dist/index.html");
})

const port = process.env.PORT || 3000;
app.listen(port);

console.log('Client live on port: '+port);