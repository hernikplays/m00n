const Discord = module.require("discord.js");
const unirest = require("unirest")


module.exports.run = async (bot, message, args) => {
    
        if (!message.channel.nsfw) return message.channel.send(":no_entry: You need to be in a NSFW channel")

        unirest.get(`https://purrbot.site/api/img/nsfw/fuck/gif`)
        .header("Accept", "application/json")
        .end(function(result) {
            
            let wem = new Discord.RichEmbed()
                    .setTitle(`Here is your NSFW Gif`)
                    .setImage(result.body.link)
                    .setColor("RANDOM")
                    .setFooter(`Requested by ${message.author.username}`, "https://images.emojiterra.com/twitter/v12/512px/1f51e.png")
                message.channel.send(wem);

        });
}


module.exports.help = {
    name: "nsfwneko"
}