const Discord = module.require("discord.js");
const superagent = require("snekfetch");
const talkedRecently = new Set();

module.exports.run = async (bot, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        return message.channel.send(`${message.author.username} please wait 2 seconds before using this comand again!`);
    }
    else {
    if (!message.channel.nsfw) return message.channel.send('Holy potato! You can only use this in a NSFW channel')
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
            
      const e = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`Requested by ${message.author.username} & powered by nekos.life`, message.author.avatarURL);
  message.channel.send(e);
        })
        talkedRecently.add(message.author.id); //cooldown
        setTimeout(() => {
          
          talkedRecently.delete(message.author.id);
        }, 2000);
    }
}

module.exports.help = {
    name: "nekolewd"
}