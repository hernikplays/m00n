const Discord = require("discord.js");
const YTDL = require("ytdl-core");
var servers = {};


module.exports.run = async (bot, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id)

    if (!message.author.id == "145973959127597057") return message.reply(":x: This command is currently in beta. But you can donate to my patreon https://patreon.com/hernikplays and get access!")
    if (!message.guild.voiceConnection) return message.reply(":x: I am not in a voice channel")
    if (!message.guild.me.voiceChannel) return message.reply(":x: There was an error while processing your request")
    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.reply(":x: You have to be in the same voice channel as me.")

    if (message.guild.voiceConnection) {
        message.guild.me.voiceChannel.leave();
        message.channel.send(":arrow_right: Left the channel")
        fetched.dispatcher.emit('finish')

    }
}

module.exports.help = {
    name: "stop"
}