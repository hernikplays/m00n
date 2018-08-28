const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("All voting links can be found on my website: https://jap.hernikplays.tk/doc/vote")
}

module.exports.help = {
    name: "vote"
}