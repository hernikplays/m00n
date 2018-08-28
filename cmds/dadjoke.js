const Discord = module.require("discord.js");
const superagent = require("snekfetch");

module.exports.run = async (bot, message, args) => {
    superagent.get('https://icanhazdadjoke.com/')
        .end((err, response) => {
      const e = new Discord.RichEmbed()
      .setTitle("Here is your dad joke")
      .addField(response.body.text)
      .setColor(`RANDOM`)
      .setFooter("Supplied by icanhazdadjoke.com")
  message.channel.send(e);
        })
}

module.exports.help = {
    name: "dadjoke"
}