const Discord = module.require("discord.js");
const randomPuppy = require('random-puppy');
const superagent = require("snekfetch");

module.exports.run = async (bot, message, args) => {
    if (!message.channel.nsfw) return message.channel.send('Holy potato! You are not in a NSFW channel!')
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
      const e = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`RANDOM`)
  message.channel.send(e);
        })
}

module.exports.help = {
    name: "nekolewd"
}