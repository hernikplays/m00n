const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
let av = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
console.log(message.guild.member(args[0]).username + " " + message.mentions.members.first().user.username)
   if(!av || av == message.author.id){
     var em = new Discord.RichEmbed()
     .setTitle("Your avatar")
     .setImage(message.author.avatarURL)
     message.channel.send(em);
   }
   else if(!message.mentions.members.first().user.username){
    var em = new Discord.RichEmbed()
     .setTitle(`Here is the avatar of ${message.guild.member(args[0]).username}`)
     .setImage(message.guild.member(args[0]).avatarURL)
     message.channel.send(em);
   }
   else {
    var em = new Discord.RichEmbed()
     .setTitle(`Here is the avatar of ${message.mentions.members.first().user.username}`)
     .setImage(message.mentions.members.first().user.avatarURL)
     message.channel.send(em);
   }
   
}

module.exports.help = {
    name: "avatar"
}