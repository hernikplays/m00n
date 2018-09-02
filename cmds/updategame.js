const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.author.id == "145973959127597057") return message.reply("This command is restricted to bot owner")
    bot.user.setActivity(`${args.join(' ')}`, {type: 'PLAYING'});
}

module.exports.help = {
    name: "ug"
}