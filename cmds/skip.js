const Discord = require("discord.js");
const YTDL = require("ytdl-core");
var servers = {};


module.exports.run = async (bot, message, args) => {
    if(!message.author.id == "145973959127597057") return message.reply("This command is currently limited due to limits of our (free) hosting")
    function play(connection, message) {
        var server = server[message.guild.id];
        server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    
        server.queue.shift();
    
        server.dispatcher.on("end", function() {
            if(server.queue[0]) play(connection, message);
            else connection.disconnect; 
        });
    }
    var server = servers[message.guild.id];
    if (server.dispatcher) server.dispatcher.end();
    message.channel.send("Skipped...")
}

module.exports.help = {
    name: "skip"
}