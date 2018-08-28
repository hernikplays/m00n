const Discord = module.require("discord.js");
const randomnum = require("unique-random");
const rand = randomnum(1, 6);
module.exports.run = async (bot, message, args) => {
    const de = bot.emojis.find("name", "dicesix");

  await message.channel.send("Rolling the dice...")
   .then(message => message.edit(`${de} The dice rolled ${rand()}`));

  
  
}

module.exports.help = {
    name: "dice"
}