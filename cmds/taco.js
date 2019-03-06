const Discord = module.require("discord.js");
const unirest = require("unirest")
module.exports.run = async (bot, message, args) => {
    unirest.get(`http://taco-randomizer.herokuapp.com/random/`)
    .header("Accept", "application/json")
    .end(function (result) {
      let e = new Discord.RichEmbed()
      .setTitle("Here is your Taco Recipe:")
      .addField(`Base Layer (${result.body.base_layer.name})`, `${result.body.base_layer.recipe}`)
      .addField(`Seasoning (${result.body.seasoning.name})`, `${result.body.seasoning.recipe}`)
      .addField(`Mixin (${result.body.mixin.name})`, `${result.body.mixin.recipe}`)
      .addField(`Condiment (${result.body.condiment.name})`, `${result.body.condiment.recipe}`)
      .addField(`Shell (${result.body.shell.name})`, `${result.body.shell.recipe}`)
      .setFooter("Tacos fetched from tacofancy-api","https://images.vexels.com/media/users/3/143479/isolated/preview/e9f70459fc4462131316b495865cd4f8-taco-icon-cartoon-by-vexels.png")
      message.channel.send(e);
      
    });
}

module.exports.help = {
    name: "taco"
}