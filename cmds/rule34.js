const Discord = module.require("discord.js");
const unirest = require("unirest")
const DBL = require("dblapi.js") //discordbotlist API


//const moreSites = require('../r34.json');

module.exports.run = async (bot, message, args) => {
    const dbl = new DBL(process.env.DBL_TKN, bot);

    dbl.hasVoted(message.author.id).then(voted => {
        console.log(voted)
        if (!voted) {

            let upem = new Discord.RichEmbed()
                .addField(`:x: Error`, "Please upvote the bot [here](https://top.gg/bot/481894520741691393/vote) to use this command for the next 24hrs. **Upvoting is free**")
                .setColor("#fc1414")
            message.channel.send(upem)
            return;
        }

        if (!message.channel.nsfw) return message.channel.send(":no_entry: You need to be in a NSFW channel")
        if (!args[0]) return message.channel.send("🔍 You need to enter the search term!");
        let ask = args.toString();
        let search = ask.replace(",", "");

        unirest.get(`https://gelbooru.com/index.php?page=dapi&s=post&q=index&json=1&tags=${search}&api_key=anonymous&user_id=9455`)
            .header("Accept", "application/json")
            .end(function (result) {
                if (!result.body[0]) return message.channel.send(":x: Nothing found")
                let max = result.body.length
                let min = 0
                let random = Math.floor(Math.random()*(max-min+1)+min);

                if(result.body[random].rating == "e"){
                    let e = new Discord.RichEmbed()
                    .setTitle("You asked for '" + args.join(" ") + "'")
                    .setImage(result.body[random].file_url)
                    .addField("Tags", `\`${result.body[random].tags}\``)
                    .addField("Rating", "Explicit")
                    .addField("Source", `[Click here](${result.body[random].source})`)
                    .setColor("RANDOM")
                    message.channel.send(e);
                }
                else if(result.body[random].rating == "s"){
                    let e = new Discord.RichEmbed()
                    .setTitle("You asked for '" + args.join(" ") + "'")
                    .setImage(result.body[random].file_url)
                    .addField("Tags", `\`${result.body[random].tags}\``)
                    .addField("Rating", "Safe")
                    .addField("Source", `[Click here](${result.body[random].source})`)
                    .setColor("RANDOM")
                    message.channel.send(e);
                }
                else if(result.body[random].rating == "q"){
                    let e = new Discord.RichEmbed()
                    .setTitle("You asked for '" + args.join(" ") + "'")
                    .setImage(result.body[random].file_url)
                    .addField("Tags", `\`${result.body[random].tags}\``)
                    .addField("Rating", "Questionable")
                    .addField("Source", `[Click here](${result.body[random].source})`)
                    .setColor("RANDOM")
                    message.channel.send(e);
                }

                
                

            });
    })




}


module.exports.help = {
    name: "r34"
}