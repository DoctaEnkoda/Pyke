const discord = require('discord.js');
const client = new discord.Client();

client.login('your token').then( () =>{
  console.log('Actualy connected');
}).catch(console.error);

const {Pyke} = require('pyke');
const  pyke_api = new Pyke('your api key');

client.on('message', async message =>{
  if (message.content.startsWith('!lol test')){
      // Its just a test
      var username = "SP Jason";
      var regionID = "euw1";

      let data = await pyke_api.summoner.getBySummonerName(username, regionID);
      /*
       data = { 
        id: 79858287,
        accountId: 224542288,
        summonerLevel: 119,
        profileIconId: 3348,
        name: 'SP Jason' 
       }
      */
      message.reply('Level : ' + data.summonerLevel );
  }
});
