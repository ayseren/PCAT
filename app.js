const express = require('express');
const app = express();

//middleware
// const myLogger = (req, res, next) => {
//     console.log("ayse");
//     next();
// }

app.use(express.static('public'))
//app.use(myLogger);

app.get('/', (req, res) => {
    res.send('asdfadf');
});

const port = 3000;
app.listen(port, () => {
  console.log(`${port}`);
});
