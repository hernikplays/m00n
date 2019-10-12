const Discord = module.require("discord.js");
const unirest = require("unirest")
module.exports.run = async(bot, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":no_entry: You need to be in a NSFW channel")
    unirest.get(`https://api.ramfish.tk/porn`)
        .header("Accept", "application/json")
        .end(function(result) {
            console.log(result.body)
            let e = new Discord.RichEmbed()
                .setTitle(`Here's your Porn GIF`)
                .setImage(result.body.url)
                .setColor("#AE090D")
                .setFooter(`Requested by ${message.author.username}`, "https://images.emojiterra.com/twitter/v12/512px/1f51e.png")
            message.channel.send(e);

        });
}

module.exports.help = {
    name: "porn"
}