let Discord = module.require("discord.js");
const theprefix = "pt!" // Here it is just so I don't have to rewrite the footer
module.exports.run = async (bot, message, args) => {
    
            
          let em2 = new Discord.RichEmbed()
          
          .setColor("#FFFF7F")
          .addField("Help", "Full help avalible [here](https://jap.hernikplays.cz/doc/commands)")
           
            .setFooter(`Bot Prefix: ${theprefix} -- <required> [optional] -- Bot is still in development, any bugs to ${theprefix}error -- created by hernikplays#4673`)
            await message.channel.send(em2);
            
}

module.exports.help = {
    name: "help"
}
