const Discord = module.require("discord.js");
const unirest = require("unirest")
module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply('You need to specify an e-mail')
    unirest.get(`https://www.foaas.com/fyyff/${message.author.username}`)
    .header("X-Mashape-Key", process.env.APIKEY)
    .header("Accept", "text/plain")
    .end(function (result) {
      console.log(result.body);
      
    });
}

module.exports.help = {
    name: "fuckoff"
}