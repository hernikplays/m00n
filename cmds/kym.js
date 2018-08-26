const Discord = module.require("discord.js");
const kym = require("nodeyourmeme");
module.exports.run = async (bot, message, args) => {
    if(!args){
        kym.random().then(console.log).catch(console.error);
    }
    else if(args){
        kym.search(args.join(' ')).then(console.log).catch(console.error);
    }
}

module.exports.help = {
    name: "kym"
}