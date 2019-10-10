let Discord = module.require("discord.js");
const theprefix = "m!" // Here it is just so I don't have to rewrite the footer
module.exports.run = async (bot, message, args) => {
    
            
          let em2 = new Discord.RichEmbed()
          
          .setColor("#FFFF7F")
          .addField("Help", "Full help avalible [here](https://hernikplays.cz/m00n/doc/commands/)")
           
            .setFooter(`Bot Prefix: ${theprefix} -- <required> [optional] -- created by hernikplays#9617`)
            await message.channel.send(em2);
            
}

module.exports.help = {
    name: "help"
}
