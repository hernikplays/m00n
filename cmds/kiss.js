const Discord = module.require("discord.js");
const unirest = require("unirest")
module.exports.run = async (bot, message, args) => {



    let kiss = [
        "https://media1.tenor.com/images/ef4a0bcb6e42189dc12ee55e0d479c54/tenor.gif",
        "https://media.tenor.com/images/02b3ad0fb1d6aa77daeee0ace21d5774/tenor.gif",
        "https://media.tenor.com/images/912baa6ce415c3a783969c3e63a5b6b9/tenor.gif",
        "https://media.tenor.com/images/7b50048d76f76a8e5b3d8fc5a3fc6a21/tenor.gif",
        "https://media.tenor.com/images/12b26e30f1d526db62847bede9bbd414/tenor.gif",
        "https://media.tenor.com/images/1e62124baa07326a20127730fd61a464/tenor.gif",
        "https://media.tenor.com/images/25359520a0973f896b002689ed90db8d/tenor.gif"


    ]
    let hugresult = Math.floor((Math.random() * kiss.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} kiss themself... (weirdo)`)
            .setImage('https://cdn.discordapp.com/attachments/452115003659780096/460369555823525898/kiss.gif')
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        unirest.get("https://purrbot.site/api/img/sfw/kiss/gif")
            .header("Accept", "application/json")
            .end(function (result) {

                const hembed = new Discord.RichEmbed()
                    .setColor(`RANDOM`)
                    .setTitle(`${message.author.username} gave ${message.mentions.members.first().user.username} a kiss!`)
                    .setImage(result.body.link)
                message.channel.send({
                    embed: hembed
                })
                return;

            });

    }
    

}

module.exports.help = {
    name: "kiss"
}