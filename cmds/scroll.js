const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if(!args[0]) return message.reply("You need to enter the text for the scroll!");
    
        let scroll = args.join('%20');
        let em = new Discord.RichEmbed()
        .setTitle(`Ah yes, the scroll of truth`)
        .setImage(`https://api.alexflipnote.dev/scroll?text=${scroll}`)
        .setFooter("Powered by alexflipnote.dev")
        .setTimestamp(new Date())
        message.channel.send(em);
            return;
}

module.exports.help = {
    name: "scroll"
}