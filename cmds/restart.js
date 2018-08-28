const Discord = module.require("discord.js");
const botconfig = require("../botconfig.json");
const Webhook = require("webhook-discord")
 
const Hook = new Webhook(process.env.WBHK)
module.exports.run = async (bot, message, args) => {
    
    if (message.author.id !== '145973959127597057' && message.author.id !== '145973959127597057') return message.channel.send("*Oh hey. You suck!* - Scout");
    message.channel.send("Woosh!").then(msg => {
        msg.delete(2000)
    });
    bot.destroy();
    bot.login(process.env.BOT_TKN);
    message.channel.send("Hey! Back from the dead!").then(msg => {
        msg.delete(5000)
        Hook.info("Successfully Restarted", "Info");
    });
}

module.exports.help = {
    name: "restart"
}