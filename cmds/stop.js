const Discord = require("discord.js");
const YTDL = require("ytdl-core");
var servers = {};
function play(connection, message) {
    var server = server[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if(server.queue[0]) play(connection, message);
        else connection.disconnect; 
    });
}
var servers = {};
module.exports.run = async (bot, message, args) => {
    var server = servers[message.guild.id];
    if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    message.channel.send("Left the voice channel");

}

module.exports.help = {
    name: "stop"
}