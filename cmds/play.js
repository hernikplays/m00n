const Discord = require("discord.js");
const YTDL = require("ytdl-core");

module.exports.run = async (bot, message, args, ops) => {
    if (!message.author.id == "145973959127597057") return message.reply("This command is currently in beta. But you can donate to my patreon https://patreon.com/hernikplays and get access!")
    if (!args[0]) return message.reply("You need to send a YouTube link!");
    if (!message.member.voiceChannel) return message.reply("Music is better played from a voice channel! Please join one first!");
    //if (message.guild.me.voiceChannel) return message.reply("Sorry, I am already connected to a voice channel")
    let validate = await YTDL.validateURL(args[0]);
    if (!validate) return message.reply("Please enter a **valid** YouTube URL");
    let info = await YTDL.getInfo(args[0]);
    let data = ops.active.get(message.guild.id) || {}
    if (!data.connection) data.connection = await message.member.voiceChannel.join()
    if (!data.queue) data.queue = [];
    data.guildID = message.guild.id
    data.queue.push({
        songTitle: info.player_response.videoDetails.title,
        requestedBy: message.author.username,
        url: args[0],
        announceChannel: message.channel.id
    })
    if(!data.dispatcher) play(bot, ops, data)
    else{
        message.channel.send(`Added **${info.player_response.videoDetails.title}** to the queue / Requested by ${message.author.username}`)
    }
    ops.active.set(message.guild.id, data)

    async function play(bot,ops,data){
        bot.channels.get(data.queue[0].announceChannel).send(`Now playing: ${data.queue[0].songTitle} / Requested by ${data.queue[0].requestedBy}`)
        data.dispatcher = await data.connection.playStream(YTDL(data.queue[0].url, {filter: 'audioonly'}))
        data.dispatcher.guildID = data.guildID
        data.dispatcher.once('finished', function(){
            finish(bot,ops,this)
        })
    }

    function finish(bot, ops, dispatcher){
        let fetched = ops.active.get(dispatcher.guildID)
        fetched.queue.shift();
        if(fetched.queue.length > 0){
            ops.active.set(dispatcher.guildID, fetched)
            play(bot, ops, fetched)
        }else{
            let vc = bot.guilds.get(dispatcher.guildID).me.voiceChannel
            if(vc) vc.leave();
            ops.active.delete(dispatcher.guildID)
        }
    }
}

module.exports.help = {
    name: "play"
}