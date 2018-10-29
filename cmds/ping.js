const Discord = module.require("discord.js");
const DBL = require("dblapi.js")
const unirest = require("unirest")

module.exports.run = async (bot, message, args) => {
    const dbl = new DBL(process.env.DBL_TKN, bot);
    dbl.on('posted', () => {
        console.log('Server count posted!');
      })
      
      dbl.on('error', e => {
       console.log(`Oops! ${e}`);
      })
      unirest.post('https://botsfordiscord.com/api/bot/481894520741691393')
      .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
      .send({ "count": bot.guilds.size, "Authorization": process.env.BFD_TKN})
      .end(function (response) {
        console.log("It worked hopefully");
      });
    let m = await message.channel.send("Pinging...");
    
    let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription(":ping_pong: Pong!")
            .addField("Latency", `${m.createdTimestamp - message.createdTimestamp}ms`)
            .setColor("#000000")
            .setFooter(`Information shown here may not be accurate!`)
            
            message.channel.send({embed: embed});
}

module.exports.help = {
    name: "ping"
}