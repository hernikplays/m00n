const Discord = require("discord.js");
const YTDL = require("ytdl-core");
var servers = {};



module.exports.run = async(bot, message, args) => {
    if (!message.author.id == "145973959127597057") return message.reply("This command is currently in beta. But you can donate to my patreon https://patreon.com/hernikplays and get access!")
    if (!args[0]) return message.reply("You need to send a YouTube link!");
    if (!message.member.voiceChannel) return message.reply("Music is better played from a voice channel! Please join one first!");
    let validate = await YTDL.validateURL(args[0]);
    if (!validate) return message.reply("Please enter a valid URL");
    let info = await YTDL.getInfo(args[0]);
    let connection = await message.member.voiceChannel.join();
    message.channel.send(`Now playing: ${info.title}`);
    let dispatcher = await connection.playStream(YTDL(args[0], { filter: "audioonly" }))
    .catch(err => message.channel.send(`:exclamation: There was an error while trying to play the song: ${err}`));

}

module.exports.help = {
    name: "play"
}