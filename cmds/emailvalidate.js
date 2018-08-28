const Discord = module.require("discord.js");
const unirest = require("unirest")
module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply('You need to specify an e-mail')
    unirest.get(`https://pozzad-email-validator.p.mashape.com/emailvalidator/validateEmail/${args.join(' ')}`)
    .header("X-Mashape-Key", process.env.APIKEY)
    .header("Accept", "text/plain")
    .end(function (result) {
      console.log(result);
    });
}

module.exports.help = {
    name: "ev"
}