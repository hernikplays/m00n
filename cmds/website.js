const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("Bot's website: https://jap.hernikplays.cz")
}

module.exports.help = {
    name: "web"
}