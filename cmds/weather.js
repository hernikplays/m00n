const Discord = module.require("discord.js");
var weather = require('weather-js');
const Webhook = require("webhook-discord")
 
const Hook = new Webhook(process.env.WBHK)
module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply("You need to enter a location!");
    if(!args[1]){
        weather.find({search: args.join(' '), degreeType: 'C'}, function(err, result) {
            if(err) Hook.err(`There was an error in the weather command: ${err}`,"JustAPotato");
            console.log(JSON.stringify(result, null, 2));
    });
    }
    else if(args[1] == "F"){
    weather.find({search: args.join(' ').substring("1", "0"), degreeType: 'F'}, function(err, result) {
        if(err) Hook.err(`There was an error in the weather command: ${err}`,"JustAPotato");
    
        console.log(JSON.stringify(result, null, 2));
    });}
}

module.exports.help = {
    name: "weather"
}