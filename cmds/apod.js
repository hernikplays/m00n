const Discord = module.require("discord.js");
const unirest = require("unirest")
module.exports.run = async (bot, message, args) => {
    unirest.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA}`)
    .header("Accept", "application/json")
    .end(function (result) {
      let e = new Discord.RichEmbed()
      .setTitle(`Nasa's Astronomy Picture of the Day: '${result.body.title}'`)
      .setImage(result.body.url)
      .setFooter(`Photo (C) ${result.body.copyright}`,"https://www.stickpng.com/assets/images/58429400a6515b1e0ad75acc.png")
      message.channel.send(e);
      
    });
}

module.exports.help = {
    name: "apod"
}