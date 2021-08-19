// 'use strict';

const app = require('./app.js');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
// const app = express();
// app.get('/', (req, res) => {
//     res.send('<h1>Hello world<h1>\n');
// });

app.listen(PORT,()=>{console.log( "listen on port",PORT)});


// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);