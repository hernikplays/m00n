const Discord = module.require("discord.js");
const superagent = require("snekfetch");

module.exports.run = async (bot, message, args) => {
    superagent.get('https://icanhazdadjoke.com/slack')
        .end((err, response) => {
            console.log(response);
      const e = new Discord.RichEmbed()
      .addField("Here is your dad joke", response.body.attachment+".0:."+fallback )
      .setColor(`RANDOM`)
      .setFooter("Supplied by icanhazdadjoke.com")
  message.channel.send(e);
        })
}

module.exports.help = {
    name: "dadjoke"
}