const Discord = module.require("discord.js");
const zalgo = require("to-zalgo");
const banish = require('to-zalgo/banish')
module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply(zalgo("I cannot zalgo nothing!"))
    const devil = banish(args.join(' '));
    message.channel.send(devil);
}

module.exports.help = {
    name: "dezalgo"
}