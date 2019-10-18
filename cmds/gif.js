const Discord = module.require("discord.js");
const unirest = require("unirest")
module.exports.run = async (bot, message, args) => {

    unirest.get(`api.giphy.com/v1/gifs/random?api-key=${process.env.GIPHY}`)
        .header("Accept", "application/json")
        .end(function (result) {
            console.log(result.body)
            let em = new Discord.RichEmbed()
                .setTitle("Here is your random GIF")
                .setImage(result.body.data)
                .setFooter("Supplied by GIPHY")
            message.channel.send(em)
        });


}

module.exports.help = {
    name: "gif"
}