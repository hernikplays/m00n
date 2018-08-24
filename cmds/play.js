const Discord = require("discord.js");
const YTDL = require("ytdl-core");
var servers = {};



module.exports.run = async (bot, message, args) => {
    function play(){
        var server = server[message.guild.id];
        server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    
        server.queue.shift();
    
        server.dispatcher.on("end", function() {
            if(server.queue[0]) play(connection, message);
            else connection.disconnect; 
        });
    }
    
    if(!args[0]) return message.reply("You need to send a YouTube link!");
    if(!message.member.voiceChannel) return message.reply("Music is better played from a voice channel! Please join one first!");
    if(!servers[message.guild.id]) servers[message.guild.id] = {
        queue: []
    }
    
    var server = servers[message.guild.id];

    server.queue.push(args[0]);

    if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
        play(connection, message);
    });
}

module.exports.help = {
    name: "play"
}