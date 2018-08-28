const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if(!args[0]) {
        message.reply("You must ask something!");
        return;
      }
      var sayings = ["It is certain",
                                              "It is decidedly so",
                                              "Without a doubt",
                                              "Yes, definitely",
                                              "You may rely on it",
                                              "As I see it, yes",
                                              "Most likely",
                                              "Outlook good",
                                              "Yes",
                                              "Signs point to yes",
                                              "Reply hazy try again",
                                              "Ask again later",
                                              "It will be better if we both don't know",
                                              "Cannot predict now",
                                              "Concentrate and ask again",
                                              "Don't count on it",
                                              "My reply is no",
                                              "My sources say no",
                                              "Outlook not so good",
                                              "Very doubtful"];
      
                  var result = Math.floor((Math.random() * sayings.length) + 0);
            const ballEmb = new Discord.RichEmbed()
            .setColor(0x00FFFF)
            .setAuthor('8ball', 'https://findicons.com/files/icons/1700/2d/512/8_ball.png')
            .addField(args, sayings[result]);
                  message.channel.send({embed: ballEmb})
  
}

module.exports.help = {
    name: "8ball"
}