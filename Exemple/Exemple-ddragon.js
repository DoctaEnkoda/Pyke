const {DDragon, Miss_Fortune} = require('pyke');

const data = new DDragon();
data.DDragon.getRuneList({
    version: "7.23.1"
}).then(console.log).catch(console.log)
