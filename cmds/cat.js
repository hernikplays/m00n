const talkedRecently = new Set();
const Discord = module.require("discord.js");
const unirest = require("unirest");
module.exports.run = async (bot, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        return message.channel.send(`${message.author.username} please wait 2 seconds before using that command again!`);
    }
    else {
        unirest.get(`http://aws.random.cat/meow`)
        .header("Accept", "application/json")
        .end(function (result) {
          
          
        
    const dogembed = new Discord.RichEmbed()
        .setTitle("Meow!")
        .setColor("RANDOM")
        .setImage(result.body.url)
    message.channel.send(dogembed);
});

    talkedRecently.add(message.author.id); //cooldown
        setTimeout(() => {
         
          talkedRecently.delete(message.author.id);
        }, 2000);
    }
}

module.exports.help = {
    name: "cat"
}