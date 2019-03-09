const Discord = module.require("discord.js");
const unirest = require("unirest")
module.exports.run = async (bot, message, args) => {
    unirest.get(`https://api.kanye.rest/`)
    .header("Accept", "application/json")
    .end(function (result) {
      let e = new Discord.RichEmbed()
      .addField("Here is your Kanye West quote: ", `**${result.body.quote}**`)
      .setFooter("Quotes from https://kanye.rest","https://kanye.rest/images/logo.png")
      message.channel.send(e);
      
    });
}

module.exports.help = {
    name: "kanye"
}