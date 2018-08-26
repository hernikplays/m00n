const Discord = module.require("discord.js");
const fliptable = require("flip-table");
module.exports.run = async (bot, message, args) => {
    let returnmsg = fliptable("No text to flip!");
    if(!args[0]) return message.reply(returnmsg);

   let meme = fliptable(args.join(' '));
   

   message.channel.send(meme);
}

module.exports.help = {
    name: "flip"
}