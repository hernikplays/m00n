const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
  let slots = ["🍋", "🍌", "🍒", "🍓", "🍈", "🍑"];
  let result1 = Math.floor((Math.random() * slots.length));
  let result2 = Math.floor((Math.random() * slots.length));
  let result3 = Math.floor((Math.random() * slots.length));

  if (slots[result1] === slots[result2] && slots[result3]) {
      let wEmbed = new Discord.RichEmbed()
          .setFooter("You Won!", message.author.displayAvatarURL)
          .setTitle(':slot_machine:Slots:slot_machine:')
          .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
          .setColor("#fcec14");
      message.channel.send(wEmbed);
  } else {
      let embed = new Discord.RichEmbed()
          .setFooter('You Lost!', aicon)
          .setTitle(':slot_machine:Slots:slot_machine:')
          .addField('Result', slots[result1] + slots[result2] + slots[result3], true)
          .setColor("#fc1414");
      message.channel.send(embed);
  }

}


module.exports.help = {
    name: "slots"
}