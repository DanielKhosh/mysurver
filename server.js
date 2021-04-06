const express = require ('express');
const cors = require('cors');
const server = express();

const beansRouter = require ('./routes/beans');

server.use(cors())
server.use(express.json())
server.use('/api', beansRouter)

server.listen(7000, () => console.log('surver is on'))