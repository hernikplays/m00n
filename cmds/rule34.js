const Discord = module.require("discord.js");
const Kaori = require('kaori');
const DBL = require("dblapi.js") //discordbotlist API


//const moreSites = require('../r34.json');
const kaori = new Kaori();


module.exports.run = async (bot, message, args) => {
    const dbl = new DBL(process.env.DBL_TKN, bot);

    dbl.hasVoted(message.author.id).then(voted => {
        
        if (!voted) {
            
                let upem = new Discord.RichEmbed()
            .addField(`:x: Error`, "Please upvote the bot [here](https://top.gg/bot/481894520741691393/vote) or [here](https://discord.boats/bot/m00n) to use this command for the next 24hrs. **Upvoting is free**")
            .setColor("#fc1414")
            message.channel.send(upem)
        }

        if (!message.channel.nsfw) return message.channel.send(":no_entry: You need to be in a NSFW channel")
        if (!args[0]) return message.channel.send("🔍 You need to enter the search term!");
        let ask = args.toString();
        let search = ask.replace(",", "");


        kaori.search("r34", {
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
            .catch(err => {
                let notfound = new Discord.RichEmbed()
                    .addField(":x: Error", "Cannot find any images, try another word")
                    .setTimestamp(new Date())
                    .setColor("#fc2828")


                if (err == "TypeError: Cannot read property 'common' of undefined") return message.channel.send(notfound)

                message.channel.send(`There was an error while processing your request: ${err}`)

            });
    })




}


module.exports.help = {
    name: "r34"
}