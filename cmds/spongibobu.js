const Discord = module.require("discord.js");
var spongi = require("spongibobu.js");
module.exports.run = async (bot, message, args) => {
  let returnmsg = spongi("You need a message to 'spongibobify '!"); // Don't know if too lazy or don't know how the meme exactly goes!

  if(!args[0]) return message.reply(returnmsg);

   let meme = spongi(args);
   let memeworks = meme.replace(",","&nbsp;")


   message.channel.send(memeworks);
   
}

module.exports.help = {
    name: "spongibobu"
}