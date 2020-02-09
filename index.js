const Discord = require("discord.js");
const fs = require('fs');

var bot = new Discord.Client();

bot.on('ready', () => { //{}
console.log("LE BOT EST PRÊTS!");
// bot.user.setActivity("Paradise SelfBot V0", {type: "WATCHING / PLAYING / LISTENING"})
bot.user.setGame("SimpleHost Support", 'https://www.twitch.tv/lant_row%27')
})

bot.on('message', message => {

if(message.content === '?ping') return message.channel.send('Pong!');

}) 


 
bot.on('message', message => {

    if(message.content === '?v1') return message.channel.send('**La V1 sera disponible dans quelques temps!**');
    
    })


bot.login('NjU5NDAyNjU0NjUyNDMyMzk2.XkA4vw.2_JpvWwVSbmFKTAGkQpFumcmf_A')

bot.on('message', message => {

    if(message.content === '?server') return message.channel.send('**Voici le serveur :  https://discord.gg/HA7yZFu !**');
    
    })



bot.on('message', message => {

if(message.content === '?info') return message.channel.send('**Voici le serveur :  https://discord.gg/HA7yZFu !**');
        
})

        

bot.on('message', message => {

if(message.content === '?server') return message.channel.send('**Voici le serveur :  https://discord.gg/HA7yZFu !**');
            
})

            

bot.on('message', message => {

 if(message.content === '?server') return message.channel.send('**Voici le serveur :  https://discord.gg/HA7yZFu !**');

})
 bot.on('message', message => {

 if(message.content === 'non') return message.channel.send('**Ta rien vue...**');
                    
 }) 

bot.on('message', message => {

if(message.content === 'salut') return message.channel.send('**Vous êtes tombés sur la boîte vocal de __" lαπtRøω 🧧#1000__. Veuillez ne pas lui laisser un message**');
                            
 }) 
 bot.on('message', message => {

    if(message.content === 'asap') return message.channel.send('**Rocky est gay ou lesbienne?** || Lesbienne! ||');
                                
     }) 