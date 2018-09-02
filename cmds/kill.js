const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    

    let kill = [
        "https://media.giphy.com/media/4DKJDEsK22SR2/giphy.gif",
        "https://media.giphy.com/media/h724Ile3UWMZG/giphy.gif",
        "https://media.giphy.com/media/FK96Gm1RMRGi4/giphy.gif",
        "https://media1.tenor.com/images/2291d3d08dd10a5fce38688f5ec77abb/tenor.gif",
        "https://media1.tenor.com/images/2a38cf0f15cae6bae8b74b44509f3e06/tenor.gif",
        "https://media1.tenor.com/images/901fb75df0b988793ff887248a29509a/tenor.gif",
        "https://media1.tenor.com/images/bb4b7a7559c709ffa26c5301150e07e4/tenor.gif",
        "https://media1.tenor.com/images/a38b7ac02a752bd50350ca02a25faa1d/tenor.gif",
        
       

        
      ]
      let killresult = Math.floor((Math.random() * kill.length));
      if (!args[0]) {
          const ghembed = new Discord.RichEmbed()
              .setColor(`RANDOM`)
              .setTitle(`${message.author.username} killed themself...`)
              .setImage('https://media.giphy.com/media/l41lK5NQjKm0uqPDO/giphy.gif')
          message.channel.send({
              embed: ghembed
          })
          return;
      }
      if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
          const hembed = new Discord.RichEmbed()
              .setColor(`RANDOM`)
              .setTitle(`${message.author.username} killed ${message.mentions.members.first().user.username}!`)
              .setImage(kill[killresult])
          message.channel.send({
              embed: hembed
          })
          return;
      }
      const ghembed = new Discord.RichEmbed()
          .setColor(`RANDOM`)
          .setTitle(`${message.author.username} killed themself...`)
          .setImage('https://media.giphy.com/media/l41lK5NQjKm0uqPDO/giphy.gif')
      message.channel.send({
          embed: ghembed
      })
   
}

module.exports.help = {
    name: "kiss"
}