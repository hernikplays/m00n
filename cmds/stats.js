const Discord = module.require("discord.js");
const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")
const DBL = require("dblapi.js")


module.exports.run = async(bot, message, args) => {
    const dbl = new DBL(process.env.DBL_TKN, bot);
    dbl.on('posted', () => {
        console.log('Server count posted!');
    })

    dbl.on('error', e => {
        console.log(`Oops! ${e}`);
    })
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return Hook.err(`There was an error in the stats command: ${err}`, "JustAPotato");
        }
        const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embedStats = new Discord.RichEmbed()
            .setAuthor(bot.user.username)
            .setTitle("**Bot Stats**")
            .setColor("RANDOM")
            .addField("Bot Version", "2.3")
            .addField("Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
            .addField("Uptime ", `${duration}`, true)
            .addField("Servers", `${bot.guilds.size.toLocaleString()}`, true)
            .addField("Discord.js", `v${version}`, true)
            .addField("Node", `${process.version}`, true)
            .addField("CPU usage", `\`${percent.toFixed(2)}%\``, true)
            .addField("Arch", `\`${os.arch()}\``, true)
            .addField("Platform", `\`\`${os.platform()}\`\``, true)
            .addField("API Latency", `${Math.round(bot.ping)}ms`)
        message.channel.send(embedStats)
    });

}

module.exports.help = {
    name: "stats"
}