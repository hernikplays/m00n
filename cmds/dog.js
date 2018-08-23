const Discord = module.require("discord.js");
const superagent = require("superagent");
module.exports.run = async (bot, message, args) => {
    let {
        body
    } = await superagent
        .get(`https://random.dog/woof.json`);
    const dogembed = new Discord.RichEmbed()
        .setTitle("Woof!")
        .setColor("RANDOM")
        .setImage(body.url)
    message.channel.send(dogembed);
}

module.exports.help = {
    name: "dog"
}