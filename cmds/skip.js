const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id)
    //Embeds




 


    //Embeds done

    if (!fetched) {
        let nomusic = new Discord.RichEmbed()
            .addField(":x: Error", "There is no music playing in this server.")
            .setColor("#fc2828")
            .setTimestamp(new Date())
        message.channel.send(nomusic).then(msg => {
            msg.delete(10000)
        })
        return
    }
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) {
        let notwme = new Discord.RichEmbed()
            .setColor("#fc2828")
            .addField(":x: Error", "You need to be in a channel with me to be able to skip.")
            .setTimestamp(new Date())
        message.channel.send(notwme).then(msg => {
            msg.delete(10000)
        })
        return
    }

    if (!fetched.queue[1]) return message.channel.send("There is no song in the queue to skip to")


    let userCount = message.member.voiceChannel.members.size

    let required = Math.ceil(userCount / 2)
    if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = []
    if (getMatchedCSSRules.queue[0].voteSkips.includes(message.member.id)) {
        let voted = new Discord.RichEmbed()
            .setColor("#fc2828")
            .addField(":x: Error", `You already voted to skip this song. ${fetched.queue[0].voteSkips.length}/${required} people required to skip`)
            .setTimestamp(new Date())
        message.channel.send(voted).then(msg => {
            msg.delete(10000)
        })
        return
    }
    fetched.queue[0].voteSkips.push(message.member.id)

    ops.active.set(message.guild.id, fetched)

    if (fetched.queue[0].voteSkips.length <= required) {
        let skipped = new Discord.RichEmbed()
        .setColor("#77B254")
        .addField(":white_check_mark: Skipped", `Succesfully skipped **${fetched.queue[0].songTitle}**`)
        .setTimestamp(new Date())
        message.channel.send(skipped).then(msg => {
            msg.delete(8000)
        })
        return fetched.dispatcher.emit('finish')
    }
    let sucVote = new Discord.RichEmbed()
    .setColor("#77B254")
    .addField(":white_check_mark: Success", `Succesfully voted to skip **${fetched.queue[0].songTitle}** - ${fetched.queue[0].voteSkips.length}/${required} required users`)
    .setTimestamp(new Date())

    message.channel.send(sucVote)


}

module.exports.help = {
    name: "skip"
}