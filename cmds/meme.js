let Discord = module.require("discord.js");
const randomPuppy = require('random-puppy');
module.exports.run = async (bot, message, args) => {
    let result = Math.floor((Math.random() * 4) + 0);
    if(result <= 1){
        randomPuppy('memes')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setTimestamp()
            .setImage(url)
            .setColor('RANDOM')
        message.channel.send(embed);
    });
    return;
    }
    else if(result <= 2){
        randomPuppy('DeepFriedMemes')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setTimestamp()
            .setImage(url)
            .setColor('RANDOM')
        message.channel.send(embed);
    });
    return;
    }
    else if(result <= 3){
        randomPuppy('meme')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setTimestamp()
            .setImage(url)
            .setColor('RANDOM')
        message.channel.send(embed);
    });
    return;
    }
    else if(result <= 4){
        randomPuppy('MemeEconomy')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setTimestamp()
            .setImage(url)
            .setColor('RANDOM')
        message.channel.send(embed);
    });
    return;
    }
}

module.exports.help = {
    name: "meme"
}