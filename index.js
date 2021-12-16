const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFIle(path.join(__dirname, '/public/index.html'));
})

const port = process.env.PORT || 4545

app.listen(port, () => {console.log(`Server is now on port ${port}`)})