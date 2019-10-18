const Discord = require("discord.js");
const YTDL = require("ytdl-core");
var servers = {};


module.exports.run = async(bot, message, args, ops) => {
    if (!message.author.id == "145973959127597057") return message.reply("This command is currently in beta. But you can donate to my patreon https://patreon.com/hernikplays and get access!")
    if(!message.guild.voiceConnection) return message.reply("I am not in a voice channel")
    function play(connection, message) {
        var server = server[message.guild.id];
        server.dispatcher = connection.playStream(YTDL(server.queue[0], { filter: "audioonly" }));

        server.queue.shift();

        server.dispatcher.on("end", function() {
            if (server.queue[0]) play(connection, message);
            else connection.disconnect;
        });
    }
    var server = servers[message.guild.id];


    
    if (message.guild.voiceConnection) {            
        let vc = bot.guilds.get(data.dispatcher.guildID).me.voiceChannel
        if(vc) vc.leave();
        ops.active.delete(dispatcher.guildID)
        ops.queue.clear()
        message.channel.send("Left the voice channel").then(msg => {
            msg.delete(5000)
        })
    }
    

}

module.exports.help = {
    name: "stop"
}