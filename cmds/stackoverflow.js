const Discord = module.require("discord.js");
const unirest = require("unirest")
module.exports.run = async (bot, message, args) => {
  if(!args) return message.channel.send(":x: You need to enter a question")
  let search = args.join("%20")
    unirest.get(`https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=${search}&site=stackoverflow`)
    .header("Accept", "application/json")
    .end(function (result) {
      var unixtimestamp = result.body.items[0].creation_date
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      var date = new Date(unixtimestamp*1000)
      var year = date.getFullYear()
      var month = months[date.getMonth()]
      var day = date.getDate()
      var hour = date.getHours()
      var minutes = "0" + date.getMinutes()
      var seconds = "0" + date.getSeconds()

      var time = month+"-"+day+"-"+year+' '+hours+":"+minutes.substr(-2)+":"+seconds.substr(-2)
      let e = new Discord.RichEmbed()
      .setTitle("You asked for '"+args.join(" ")+"'")
      .addField("Title", `**[${result.body.items[0].title}](${result.body.items[0].link})**`)
      .addField("Asked by", result.body.items[0].owner.display_name)
      .addField("Asked on", time)
      message.channel.send(e);
      
    });
}

module.exports.help = {
    name: "so"
}