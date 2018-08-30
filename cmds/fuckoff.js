const Discord = module.require("discord.js");
const unirest = require("unirest")
module.exports.run = async (bot, message, args) => {
    var fuckoff = [
        'everyone',
        'asshole',
        'bag',
        'bye',
        'cup',
        'diabetes',
        'everything',
        'fascinating',
        'flying',
        'fyyff',
        'give',
        'immensity',
        'looking',
        'maybe',
        'thanks',
        'too',
        'zayn'
    ]
    var fo = fuckoff[Math.round(Math.random() * (fuckoff.length - 1))];
    unirest.get(`https://www.foaas.com/${fo}/${message.author.username}`)
    .header("Accept", "text/plain")
    .end(function (result) {
      let e = new Discord.RichEmbed()
      .addField("Here is your fuck off", `**${result.body}**`)
      .setFooter("Delivered with fuckin' love by foaas.com")
      message.channel.send(e);
      
    });
}

module.exports.help = {
    name: "fuckoff"
}