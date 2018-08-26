const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("You can invite me using this link: https://s.botempire.tk/yourls/potato")
}

module.exports.help = {
    name: "invite"
}