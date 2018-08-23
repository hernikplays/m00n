let Discord = module.require("discord.js");
const theprefix = "pt." // Here it is just so I don't have to rewrite the footer
module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Here is a list of all avalible commands:")
            .setColor("#d3b626")
            .addField("=== Fun Commands ===", "Fun")
            .addField("cat", "Get a cat!")
            .addField("dog", "Get a dog!")
            .addField("smoke", "Smoke, but it's unhealthy!")
            .addField("pyro", "Sends a Pyrocynical meme")
            .addField("rw <Name>", "I will rate your waifu!")
            .addField("rps <rock/paper/scissors>", "Play rock, paper, scissors")
            .addField("coinflip", "Flip a coin")
            .addField("meme", "Get a meme")
            .addField("=== NSFW Commands ===", "Only in NSFW channels")
            .addField("nsfw", "NSFW Pictures UwU")
            .addField("hentai", "Hentai GIFs OwO")
            .addField("nekolewd","Sends a 'lewd' neko")
            .addField("=== Other Commands ===", "Unrelated")
            .addField("stats", "Show some bot stats")
            .addField("help", `Displays all commands`)
            .addField("ping", `Pong!`)
            .addField("error <the bug>", "Sends a bug report to the support server. **Abuse and you will be blacklisted**")
            .addField("invite", "Sends an invite link for the bot")
            .setFooter(`Bot Prefix: ${theprefix} -- <required> [optional] -- Bot is still in development, any bugs to ${theprefix}error -- created by hernikplays#4673`)
          
            await message.channel.send({embed: embed});
            
}

module.exports.help = {
    name: "help"
}