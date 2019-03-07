const Discord = module.require("discord.js");
const superagent = require("snekfetch");

module.exports.run = async (bot, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        return message.channel.send(`${message.author.username} please wait 3 seconds before using that command again!`);
    }
    else {
    if (!message.channel.nsfw) return message.channel.send('Holy potato! You are not in a NSFW channel!')
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
            
      const e = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`Requested by ${message.author.username} & Powered by nekos.life`, message.author.avatarURL);
  message.channel.send(e);
        })
        talkedRecently.add(message.author.id); //cooldown
        setTimeout(() => {
          
          talkedRecently.delete(message.author.id);
        }, 3000);
    }
}

module.exports.help = {
    name: "nekolewd"
}