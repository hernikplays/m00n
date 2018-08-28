const Discord = module.require("discord.js");
import zalgo from "zalgo-js";
module.exports.run = async (bot, message, args) => {
    const devil = zalgo(args.join(' '));
    message.channel.send(devil);
}

module.exports.help = {
    name: "zalgo"
}