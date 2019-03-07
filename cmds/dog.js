const talkedRecently = new Set();
const Discord = module.require("discord.js");
const superagent = require("superagent");
module.exports.run = async (bot, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        return message.channel.send(`${message.author.username} please wait 5 seconds before using that command again!`);
    }
    else {
    let {
        body
    } = await superagent
        .get(`https://random.dog/woof.json`);
    const dogembed = new Discord.RichEmbed()
        .setTitle("Woof!")
        .setColor("RANDOM")
        .setImage(body.url)
    message.channel.send(dogembed);

    talkedRecently.add(message.author.id); //cooldown
        setTimeout(() => {
          
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
}

module.exports.help = {
    name: "dog"
}