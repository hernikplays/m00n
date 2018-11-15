const Discord = module.require("discord.js");
const translate = require('translate');
const prefix = ("pt!")
const command = ("tr")
translate.engine = 'yandex';
translate.key = process.env.YNDX;
module.exports.run = async (bot, message, args) => {
    
    if (args[0]) {
        
        let tobe_translated = message.content.slice(prefix.length + command.length + 1)
        let thetext = await translate(tobe_translated, {from: args[0], to: args[1]});
        console.log(args[0] + " " + args[1] + " " + args[2])
        let em = new Discord.RichEmbed()
        .setTitle("Your translated text")
        .addField("Your Text", args[2])
        .addField("Translated text", thetext);
        message.channel.send(em);
    } else {
        message.channel.send("Usage: pt!tr iso iso Text to translate` \nThe from: and to: are optional, you can check out <http://bit.ly/ISO_codesWiki> for the iso codes\nExample: ```" + prefix + "tr ro fr Salut, ce mai faci?```")
    }
  
}

module.exports.help = {
    name: "tr"
}