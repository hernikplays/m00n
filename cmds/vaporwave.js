const Discord = module.require("discord.js");
const aesthetics = require('aesthetics');
module.exports.run = async(bot, message, args) => {
    if(!args[0]) return message.channel.send(":x: You need to enter some text!")
    let text = args.join(" ")
    message.channel.send(aesthetics(text));
}

module.exports.help = {
    name: "vaporwave"
}