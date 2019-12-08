const Discord = module.require("discord.js");
const unirest = require("unirest")


module.exports.run = async (bot, message, args) => {
    

        unirest.get(`https://purrbot.site/api/img/sfw/kitsune/img`)
        .header("Accept", "application/json")
        .end(function(result) {
            
            let wem = new Discord.RichEmbed()
                    .setTitle(`Here is your Kitsune`)
                    .setImage(result.body.link)
                    .setColor("RANDOM")
                    .setFooter(`Requested by ${message.author.username}`)
                message.channel.send(wem);

        });
}


module.exports.help = {
    name: "kitsune"
}