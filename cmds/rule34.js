const Discord = module.require("discord.js");
const talkedRecently = new Set();
const Kaori = require('kaori');
//const moreSites = require('../r34.json');
const kaori = new Kaori();


module.exports.run = async(bot, message, args) => {

    if (!message.channel.nsfw) return message.channel.send(":no_entry: You need to be in a NSFW channel")
    if (!args[0]) return message.channel.send("🔍 You need to enter the search term!");
    let ask = args.toString();
    let search = ask.replace(",", "");

    var r34sites = [
        'r34',
        'gelbooru'
    ]
    var chooser34 = r34sites[Math.round(Math.random() * (r34sites.length - 1))];
    console.log(chooser34);
    kaori.search(chooser34, {
            tags: [search],
            limit: 1,
            random: true
        }).then(images => {
            let wem = new Discord.RichEmbed()
                .setTitle(`Here is your porn`)
                .setImage(images[0].common.fileURL)
                .setColor("RANDOM")
                .setFooter(`Requested by ${message.author.username}`, "https://images.emojiterra.com/twitter/v12/512px/1f51e.png")
            message.channel.send(wem);
        })
        .catch(err => message.channel.send(`There was an error while processing your request: ${err}`));


}


module.exports.help = {
    name: "r34"
}