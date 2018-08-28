const Discord = module.require("discord.js");
const { EmoteFetcher, EmoteParser } = require('twitch-emoticons');
const fetcher = new EmoteFetcher();
const parser = new EmoteParser(fetcher, {
    type: 'markdown',
    match: /:(.+?):/g
});
module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply("You need to enter an emote's name!");
    fetcher.fetchTwitchEmotes().then(() => {
        const emote = fetcher.emotes.get(args.join(' ')).toLink();
        console.log(emote);
    })
}

module.exports.help = {
    name: "twitchemote"
}