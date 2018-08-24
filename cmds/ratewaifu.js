let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let m421 = args.join(" ");
  if (!m421) return message.channel.send("If you don't have a waifu, I won't rate it.")
  if (m421.length > 30) return message.channel.send(`I can't rate your waifu! It's over 30 text!`)
  let result = Math.floor((Math.random() * 100) + 0);
  
    const happyrate = new Discord.RichEmbed()
  .setDescription(`I would totally rate **${m421}** ${result}/100 ❤`)
  .setColor(`GREEN`)
    
      const sadembed = new Discord.RichEmbed()
  .setDescription(`I think that ${result}/100 is fair enough for **${m421}**`)
  .setColor(`GREEN`)
      
        const idkembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 Don't judge me!`)
  .setColor(`GREEN`)
        
      const shrugembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** a solid ${result}/100`)
  .setColor(`GREEN`)
                
          const okembed = new Discord.RichEmbed()
  .setDescription(`${result}/100 for **${m421}** That's what I thought!`)
  .setColor(`GREEN`)
                        
const thumbupembed = new Discord.RichEmbed()
  .setDescription(`You can't fool me! The rating for **${m421}** should be ${result}/100 👍`)
  .setColor(`GREEN`)

const eyesembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 👀`)
  .setColor(`GREEN`)
  
  if (result > 90) return message.channel.send(happyrate)
  if (result < 30) return message.channel.send(sadembed)
  if (result > 40) return message.channel.send(idkembed)
  if (result > 50) return message.channel.send(shrugembed)
  if (result > 60) return message.channel.send(okembed)
  if (result > 70) return message.channel.send(thumbupembed)
  if (result > 80) return message.channel.send(eyesembed)
}

module.exports.help = {
    name: "rw"
}