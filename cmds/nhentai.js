const Discord = module.require("discord.js");
const nhentai = require('nhentai-js')


module.exports.run = async (bot, message, args) => {

    if (!message.channel.nsfw) return message.channel.send(":no_entry: You need to be in a NSFW channel")
    if (!args[0]) return message.channel.send("🔍 You need to enter a Nhentai ID");
    let ask = args.toString();
    let search = ask.replace(",", "");
    (async () => {
        if (nhentai.exists(search)) {
            const dojin = await nhentai.getDoujin(search)
            console.log(dojin)

            if (!dojin.details.characters) {
                console.log(dojin)
                let art = dojin.details.artists.join(", ");
                let tags = dojin.details.tags.join(", ");
                let e = new Discord.RichEmbed()
                    .setTitle(dojin.title + `(${dojin.link})`)
                    .addField("Artists", art)
                    .addField("Tags", tags)
                    .setImage(dojin.pages[0])
                message.channel.send(e)
            } else {
                let art = dojin.details.artists.join(", ");
                let char = dojin.details.characters.join(", ");
                let tags = dojin.details.tags.join(", ");
                let e = new Discord.RichEmbed()
                    .setTitle(dojin.title + `(${dojin.link})`)
                    .addField("Artists", art)
                    .addField("Characters", char)
                    .addField("Tags", tags)
                    .setImage(dojin.pages[0])
                message.channel.send(e)
            }

        } else {
            return message.channel.send(":x: Doujin not found")
        }
    })();


}


module.exports.help = {
    name: "nhentai"
}