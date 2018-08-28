const Discord = module.require("discord.js");
const zalgojs = require("zalgo-js");
module.exports.run = async (bot, message, args) => {
    import zalgo from "zalgo-js";
    const devil = zalgo(args.join(' '));
    message.channel.send(devil);
}

module.exports.help = {
    name: "zalgo"
}