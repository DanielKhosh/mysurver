const { Router } = require('express');
const router = new Router();
const fs = require('fs');

Router.get('/', (req, res) => {
    const menu =fs.createReadStream('kaffe.json')
    menu.pipe(res)
})
module.exports = router