const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    const cleverbot = require("cleverbot.io");
    const clever = new cleverbot(process.env.CB_USR, process.env.CB_KEY); //replace with your cleverbot.io username and keys! These are hidden in server
    clever.setNick("Source code");
    clever.create(function(err, session) {
        clever.ask(args.join(' '), function(err, res) {
            message.channel.send(res);
        });
    });
  
}

module.exports.help = {
    name: "talk"
}