const Discord = module.require("discord.js");
const nekoslife = require("nekos.life");
const neko = new nekoslife();

module.exports.run = async (bot, message, args) => {
    const owo = bot.emojis.find("name", "blobowoevil");
    if (talkedRecently.has(message.author.id)) {
        return message.channel.send(`${message.author.username} please wait 5 seconds before using that command again!`);
    }
    else {
    if (!message.channel.nsfw) return message.reply("This command can only be used in NSFW channels!");

    let pic = await neko.getNSFWRandomHentaiGif();
    let picStr = JSON.stringify(pic);
    let picSlice = picStr.slice(8);
    let picGet = picSlice.slice(0, -2);
    let emb = new Discord.RichEmbed()
        .setDescription(`Here is your Hentai GIF!`)
        .setColor("RANDOM")
        .setImage(picGet)
        .setFooter(`Requested by ${message.author.username} & Powered by nekos.life`, message.author.avatarURL);
        message.channel.send(emb);

        talkedRecently.add(message.author.id); //cooldown
        setTimeout(() => {
          
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
  
}

module.exports.help = {
    name: "hentai"
}