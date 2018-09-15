const talkedRecently = new Set();
const Discord = module.require("discord.js");
const superagent = require("superagent");
module.exports.run = async (bot, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        return message.channel.send(`${message.author.username} please wait 15 seconds before using that command again!`);
    }
    else {
    let {
        body
    } = await superagent
        .get(`http://shibe.online/api/shibes`);
    const catembed = new Discord.RichEmbed()
        .setTitle('Wow!')
        .setColor("RANDOM")
        .setImage(body.file)
    message.channel.send(catembed);

    talkedRecently.add(message.author.id); //cooldown
        setTimeout(() => {
         
          talkedRecently.delete(message.author.id);
        }, 15000);
    }
}

module.exports.help = {
    name: "shibe"
}