const Discord = module.require("discord.js");
const randomPuppy = require('random-puppy');


module.exports.run = async (bot, message, args) => {
    
    if (!message.channel.nsfw) return message.channel.send("Holy potato! You are not in a NSFW channel!");

    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

   
    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setAuthor("4k", bot.user.avatarURL)
                .setFooter("")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
 
}

module.exports.help = {
    name: "nsfw"
}