const Discord = module.require("discord.js");
const bsf = require("libbase64");
  
module.exports.run = async (bot, message, args) => {
   if(!args[0]) return message.reply("You need to supply text to encode!")
   let encode = bsf.encode(args.join(' '));
   
   message.channel.send(encode)
}

module.exports.help = {
    name: "base64"
}