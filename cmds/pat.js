const Discord = module.require("discord.js");
const unirest = require("unirest")
module.exports.run = async (bot, message, args) => {

    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} pat themself...`)
            .setImage('https://i.imgur.com/PYD7b5A.gif')
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        unirest.get("https://purrbot.site/api/img/sfw/pat/gif")
            .header("Accept", "application/json")
            .end(function (result) {

                const hembed = new Discord.RichEmbed()
                    .setColor(`RANDOM`)
                    .setTitle(`${message.author.username} gave ${message.mentions.members.first().user.username} a pat on the head!`)
                    .setImage(result.body.link)
                message.channel.send({
                    embed: hembed
                })
                return;

            });

    }
    

}

module.exports.help = {
    name: "pat"
}