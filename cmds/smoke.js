let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("**Smokin'**").then(async msg => {
        setTimeout(() => {
          msg.edit('🚬');
        }, 500);
        setTimeout(() => {
          msg.edit('🚬 ☁ ');
        }, 1000);
        setTimeout(() => {
          msg.edit('🚬 ☁☁ ');
        }, 1500);
        setTimeout(() => {
          msg.edit('🚬 ☁☁☁ ');
        }, 2000);
        setTimeout(() => {
          msg.edit('🚬 ☁☁');
        }, 2500);
        setTimeout(() => {
          msg.edit('🚬 ☁');
        }, 3000);
        setTimeout(() => {
          msg.edit('🚬 ');
        }, 3500);
        setTimeout(() => {
          msg.edit(`Finished smoking`);
        }, 4000);
      });
}

module.exports.help = {
    name: "smoke"
}