const Discord = module.require("discord.js");
var weather = require('weather-js');
const Webhook = require("webhook-discord")
 
const Hook = new Webhook(process.env.WBHK)
module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply("You need to enter a location!");
    if(!args[1]) let degree = "C";
    if(args[2]) let location = args[0] + args[1];
    weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
        if(err) Hook.err(`There was an error in the weather command: ${err}`,"JustAPotato");
    
        console.log(JSON.stringify(result, null, 2));
    });
}

module.exports.help = {
    name: "weather"
}