const Discord = module.require("discord.js");

const Kaori = require('kaori');
const moreSites = require('../r34.json');
const kaori = new Kaori(moreSites);

module.exports.run = async (bot, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        return message.channel.send(`${message.author.username} please wait 3 seconds before using that command again!`);
    }
    else {
    if(!message.channel.nsfw) return message.channel.send(":no_entry: You need to be in a NSFW channel")
    if(!args[0]) return message.channel.send("🔍 You need to enter the search term!");
    let ask = args.toString();
    let search = ask.replace(",","");
    
    kaori.search('r34', { tags: [search], limit: 1, random: true }).then(images => 
        
        
        message.channel.send({file: images[0].common.fileURL})
        )
    .catch(err => message.channel.send(`There was an error while processing your request: ${err}`));

    talkedRecently.add(message.author.id); //cooldown
        setTimeout(() => {
          
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
}

module.exports.help = {
    name: "r34"
}