const Discord = module.require("discord.js");
var weather = require('weather-js');
const Webhook = require("webhook-discord")
 
const Hook = new Webhook(process.env.WBHK)
module.exports.run = async (bot, message, args) => {
    if(!message.author.id == "145973959127597057") return message.reply("This command is being tested")
    if(!args[0]) return message.reply("You need to enter a location!");
    if(!args[1]){
        weather.find({search: args.join(' '), degreeType: 'C'}, function(err, result) {
            if(err) Hook.err(`There was an error in the weather command: ${err}`,"JustAPotato");
            
            return;
    });
    }
    else if(args[1] == "F"){
    weather.find({search: args.join(' ').substring("1", "0"), degreeType: 'F'}, function(err, result) {
        if(err) Hook.err(`There was an error in the weather command: ${err}`,"JustAPotato");
    
        let stringif = JSON.stringify(result, null, 2);
        let wem = new Discord.RichEmbed()
        .setTitle(`Current weather in ${stringif.location.name}`)
        .addField("Current Temperature",`${stringif.current.temperature}°F`)
        .addField("Sky", stringif.current.skytext)
        .addField("Wind Speed & Location", stringif.current.winddisplay)
        message.channel.send(wem);
    });}
}

module.exports.help = {
    name: "weather"
}