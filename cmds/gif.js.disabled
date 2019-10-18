const Discord = module.require("discord.js");
const unirest = require("unirest")
module.exports.run = async (bot, message, args) => {
    unirest.get(`api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY}`)
        .end(function (result) {
            console.log(result.body)
            let em = new Discord.RichEmbed()
                .setTitle("Here is your random GIF")
                .setImage(result.body.data.images.original.url)
                .setFooter("Supplied by GIPHY")
            message.channel.send(em)
        });


}

module.exports.help = {
    name: "gif"
}