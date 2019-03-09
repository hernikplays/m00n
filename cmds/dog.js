const talkedRecently = new Set();
const Discord = module.require("discord.js");
const unirest = require("unirest");
module.exports.run = async (bot, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        return message.channel.send(`${message.author.username} please wait 2 seconds before using that command again!`);
    }
    else {
        unirest.get(`https://random.dog/woof.json`)
        .header("Accept", "application/json")
        .end(function (result) {
            console.log(result.body)

          
        
    const dogembed = new Discord.RichEmbed()
        .setTitle("Woof!")
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
    name: "dog"
}