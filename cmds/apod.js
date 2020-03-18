const Discord = module.require("discord.js");
const unirest = require("unirest")
module.exports.run = async (bot, message, args) => {
    unirest.get(`https://api.nasa.gov/planetary/apod?api_key="NASAAPIKEY"`)
    .header("Accept", "application/json")
    .end(function (result) {
      let e = new Discord.RichEmbed()
      .setTitle(`NASA's Astronomy Picture of the Day: '${result.body.title}'`)
      .setImage(result.body.url)
      .setColor("#0066B1")
      .setFooter(`Photo (C) ${result.body.copyright}`,"https://www.stickpng.com/assets/images/58429400a6515b1e0ad75acc.png")
      message.channel.send(e);
      
    });
}

module.exports.help = {
    name: "apod"
}
