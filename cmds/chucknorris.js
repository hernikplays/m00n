const Discord = module.require("discord.js");
const unirest = require("unirest")
module.exports.run = async (bot, message, args) => {
    unirest.get(`http://api.chucknorris.io/jokes/random`)
    .header("Accept", "application/json")
    .end(function (result) {
      let e = new Discord.RichEmbed()
      .addField("Here is your Chuck Norris Fact: ", `**${result.body.value}**`)
      .setFooter("Facts from https://chucknorris.io","https://assets.chucknorris.host/img/avatar/chuck-norris.png")
      message.channel.send(e);
      
    });
}

module.exports.help = {
    name: "chuck"
}