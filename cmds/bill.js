const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if(!args[0]) return message.reply("You need to enter a name!");
    
        let name = args.join('%20');
        let em = new Discord.RichEmbed()
        .setTitle(`To be or not to be like ${name}`)
        .setImage(`https://belikebill.ga/billgen-API.php?default=1&name=${name}`)
        .setFooter("Powered by belikebill.ga", "https://xd.lol-sa.me/i/o1m0.png")
        message.channel.send(em);
            return;
}

module.exports.help = {
    name: "blb"
}