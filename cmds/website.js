const Discord = module.require("discord.js");

module.exports.run = async(bot, message, args) => {
    message.channel.send("Bot's website: https://hernikplays.cz/m00n and GitHub repo: https://github.com/hernikplays/m00n")
}

module.exports.help = {
    name: "web"
}