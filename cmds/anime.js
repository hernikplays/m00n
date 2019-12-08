const Discord = module.require("discord.js");
const unirest = require("unirest")
module.exports.run = async(bot, message, args) => {
    let search = args.join("%20")
    unirest.get(`https://kitsu.io/api/edge/anime?filter[text]=${search}`)
        .header("Accept", "application/json")
        .end(function(result) {
            if(result.body.meta.count == 0) return message.channel.send(":x: Nothing found")
            let e = new Discord.RichEmbed()
                .setTitle(`Here's what I found`)
                .setImage(result.body.data[0].posterImage.medium)
                .addField("English Title", result.body.data[0].attributes.titles.en, true)
                .addField("Japanese Title", result.body.data[0].attributes.titles.en_jp, true)
                .addField("Description", result.body.data[0].attributes.synopsis, true)
                .addField("Episode Count", result.body.data[0].attributes.episodeCount)
                .setColor("RANDOM")
                //.setFooter(`Requested by ${message.author.username}`)
            message.channel.send(e);

        });
}

module.exports.help = {
    name: "anime"
}