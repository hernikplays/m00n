const Discord = module.require("discord.js");
const Jimp = require(`jimp`);
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
    const blacklisted1 = [process.env.BL1] //Note to myself: add blacklisted people to a JSON or atleast a blacklist command

    let Blacklisted = new Discord.RichEmbed()
        .setTitle(":no_entry_sign: Blacklisted")
        .setDescription(`You've been blacklisted from using the Error Command, for at least one of the following reasons:\n 1) Spamming of the command.\n 2) Other reason.`)
        .setFooter("If you'd like to appeal to be whitelisted please contact hernikplays#4673")
        .setColor("RED")
        .setThumbnail(message.author.avatarURL);
        if (talkedRecently.has(message.author.id)) {
            return message.channel.send(`${message.author.username} please wait 15 seconds before using that command again!`);
        }
        else {
        if(message.author.id == blacklisted1) return message.channel.send(Blacklisted); 
    let replies = [`Won't work`, `May work`, `👀`, `Will Work`, `Who knows if it will work`, `High Chance of Working`, `Will Work <3`, `A Great Match <3`, `PERFECT MATCH ❤`]
        let result = Math.floor(Math.random() * replies.length);
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        if(!mUser) return message.channel.send(`Please specifify two users next time!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://www.botempire.tk/i/test.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            
            imagetouse.quality(60)
                      .resize(866, 866)
                      .write("imagetouse.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
            
            imagetouse2.quality(60)
                      .resize(866, 866)
                      .write("imagetouse2.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(function (font) {
                    mydude.quality(60)
                    mydude.print(font, 635, 1717, `${message.author.username}`)
                    mydude.composite( imagetouse, 784, 797 )
                    mydude.composite( imagetouse2, 2191, 797)
                    mydude.write("saveme.jpg");
                    mydude.getBuffer(`image/jpeg`, (err, buf) => {
                       
                        message.channel.send({files: [{attachment: buf, name: `saveme.jpg`}] });
                        message.channel.send(replies[result]);

                        talkedRecently.add(message.author.id); //cooldown
        setTimeout(() => {
         
          talkedRecently.delete(message.author.id);
        }, 15000);
                        
                    });
                });
            });}
        )});
        }
}

module.exports.help = {
    name: "ship"
}