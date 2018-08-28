const Discord = module.require("discord.js");
const Webhook = require("webhook-discord")
 
const Hook = new Webhook(process.env.WBHK)
module.exports.run = async (bot, message, args) => {
    
    if(!args[0]) return message.reply("You need to enter a location!");
    if(!args[1]){
        let nope = args.join(' ');
        let wem = new Discord.RichEmbed()
        .setTitle(`Weather forecast for ${nope}`)
        .setImage(`https://wttr.in/${nope}.png?m`)
        .setFooter("Powered by wttr.in", "https://s8.postimg.cc/7i7ntzih1/wttr_in.png")
        message.channel.send(wem);
            return;
  
    }
    else if(args[1] == "F"){
        let yeet = args.join(' ')
        console.log(yeet);
        let yote = yeet.slice(0, -2);
        let wem = new Discord.RichEmbed()
        .setTitle(`Weather forecast for ${yote}`)
        .setImage(`https://wttr.in/${yote}.png?u`)
        .setFooter("Powered by wttr.in", "https://s8.postimg.cc/7i7ntzih1/wttr_in.png")
        message.channel.send(wem);
        return;
   
        }
}

module.exports.help = {
    name: "weather"
}