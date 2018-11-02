const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("You can invite me using this link: https://discordapp.com/oauth2/authorize?client_id=481894520741691393&scope=bot&permissions=347200")
}

module.exports.help = {
    name: "invite"
}