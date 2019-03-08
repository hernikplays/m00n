const Discord = module.require("discord.js");
const talkedRecently = new Set();
const Pornsearch = require('pornsearch');


module.exports.run = async (bot, message, args) => {
    
    if(!message.channel.nsfw) return message.channel.send(":no_entry: You need to be in a NSFW channel")
    if(!args[0]) return message.channel.send("🔍 You need to enter the search term!");
        let Searcher = new Pornsearch(args.join());
        Searcher.gifs()
        .then(gifs => console.log(gifs));

    
}

module.exports.help = {
    name: "pgif"
}