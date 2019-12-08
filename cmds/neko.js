const Discord = module.require("discord.js");
const unirest = require("unirest")


module.exports.run = async (bot, message, args) => {
    
        unirest.get(`https://purrbot.site/api/img/sfw/neko/img`)
        .header("Accept", "application/json")
        .end(function(result) {
            
            let wem = new Discord.RichEmbed()
                    .setTitle(`Here is your Neko`)
                    .setImage(result.body.link)
                    .setColor("RANDOM")
                    .setFooter(`Requested by ${message.author.username}`)
                message.channel.send(wem);

        });
}


module.exports.help = {
    name: "neko"
}