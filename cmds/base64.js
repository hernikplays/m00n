const Discord = module.require("discord.js");
const text = require("text");
const Webhook = require("webhook-discord")
 
const Hook = new Webhook(process.env.WBHK)
module.exports.run = async (bot, message, args) => {
   if(!args[0]) return message.reply("You need to supply text to encode!")
   let encode = text.urlsafeEncode64(args.join(' '));
   if(err) return Hook.info(`There was an error in the base64 command: ${err}`,"Error");
   message.channel.send(encode)
}

module.exports.help = {
    name: "base64"
}