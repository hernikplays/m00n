const Discord = module.require("discord.js");

module.exports.run = async(bot, message, args) => {
    if (!message.author.id == "145973959127597057") return message.reply("This command is currently in beta. But you can donate to my patreon https://patreon.com/hernikplays and get early access!")
}

module.exports.help = {
    name: "giveaway"
}