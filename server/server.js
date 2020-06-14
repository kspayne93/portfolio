const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const { PORT } = process.env;
const port = PORT;

app.use(express.static( `${__dirname}/../build` ));
app.use(express.json());

app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
})

app.get('*', (req, res)=>{
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
