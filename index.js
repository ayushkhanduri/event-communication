const express = require('express');
const app = express();

app.use(express.static('build'));

app.get('*', (req,res,next) => {
    const location = `${__dirname}/build/test.html`;
    res.sendFile(location);
})

app.listen(3001, () => {
    console.log("Listening to port 3000!");
})