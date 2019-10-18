const Discord = module.require("discord.js");
const giphyRandom = require("giphy-random");
const API_KEY = process.env.GIPHY;
module.exports.run = async (bot, message, args) => {
    (async () => {       
        const { data } = await giphyRandom(API_KEY);
       let em = new Discord.RichEmbed()
       .setTitle("Here is your random GIF")
       .setImage(data)
       .setFooter("Supplied by GIPHY")
        message.channel.send(em)
      })();
}

module.exports.help = {
    name: "invite"
}