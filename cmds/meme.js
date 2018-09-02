const talkedRecently = new Set();
let Discord = module.require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    if (talkedRecently.has(msg.author.id)) {
        msg.channel.send(`${message.author.username} please wait 1 minute before using that command again!`);
    }
    
    let result = Math.floor((Math.random() * 4) + 0);
    if(result <= 1){
        randomPuppy('memes')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setTimestamp()
            .setImage(url)
            .setColor('RANDOM')
        message.channel.send(embed);
        talkedRecently.add(message.author.id); //cooldown
        setTimeout(() => {
          
          talkedRecently.delete(msg.author.id);
        }, 15000);
    
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
        talkedRecently.add(message.author.id); //cooldown
        setTimeout(() => {
         
          talkedRecently.delete(msg.author.id);
        }, 15000);
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
        talkedRecently.add(message.author.id); //cooldown
        setTimeout(() => {
          
          talkedRecently.delete(msg.author.id);
        }, 15000);
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
        
        talkedRecently.add(message.author.id); //cooldown
        setTimeout(() => {
         
          talkedRecently.delete(msg.author.id);
        }, 15000);
    });
    return;
    }
}

module.exports.help = {
    name: "meme"
}