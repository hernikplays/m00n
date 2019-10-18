const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id)
    if(!fetched) return message.reply("There isn't any music playing in this server.")

    let queue = fetched.queue
    let nowPlaying = queue[0]

    let resp = `**Now Playing**\n${nowPlaying.songTitle}\n**Requested by:**\n${nowPlaying.requestedBy}\n\n**Server Queue:**\n`

    for (var i = 1; i < queue.length; i++){
        resp += `{i}. ${queue[i].songTitle} - Requested by: ${queue[i].requestedBy}\n`
    }

    message.channel.send(resp)
}

module.exports.help = {
    name: "queue"
}