const Discord = module.require("discord.js");
const unirest = require("unirest")
module.exports.run = async (bot, message, args) => {
    unirest.get(`https://icanhazdadjoke.com/`)
    .header("Accept", "text/plain")
    .end(function (result) {
        console.log(result.body)
      let e = new Discord.RichEmbed()
      .addField("Here is your dad joke", `**${result.body}**`)
      .setFooter("Dad jokes dad-livered by icanhazdadjoke.com")
      message.channel.send(e);
      
    });
}

module.exports.help = {
    name: "dadjoke"
}