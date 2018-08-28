let Discord = module.require("discord.js");
const fortnite = require("fortnite");
const ft = new fortnite(process.env.FRTNT); //fortnite tracker key
module.exports.run = async (bot, message, args) => {
    let username = args[0];
    let platform = args[1] || 'pc';

    if(!username) return message.reply("I need a Fortnite username!");
   

    

    let data = ft.user(username, platform).then(data => {
        let stats = data.stats;
        let lifetime=stats.lifetime;

        let score = lifetime[6]['Score'];
        let mpl = lifetime[7]['Matches Played'];
        let win = lifetime[8]['Wins'];
        let winper = lifetime[9]['Win%'];
        let kill = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];
        
        
        let embed = new Discord.RichEmbed()
        .setTitle(data.username)
        .setColor("#FFFF00")
        .addField("Score", score, true)
        .addField("Matches Played", mpl, true)
        .addField("Total Wins", win, true)
        .addField("Win%", winper, true)
        .addField("Total Kills", kill, true)
        .addField("Total K/D", kd, true)
        .addField("More Stats", `Check more stats on [Fortnite Tracker](https://fortnitetracker.com/profile/${platform}/${username})`)
        .setFooter(`Using FortniteTracker API`)

        message.channel.send({embed: embed});
    })
}

module.exports.help = {
    name: "fortnite"
}
