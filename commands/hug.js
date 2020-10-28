

const { RichEmbed } = require("discord.js")
const fetch = require('node-fetch');

exports.run = async (client, message, args, level) => {
   
        let msg = await message.channel.send("Generating...")

        fetch("https://some-random-api.ml/animu/hug")
        .then(res => res.json()).then(body => {
            if(!body) return message.reply(" whoops. I broke, try again!")

            let embed = new RichEmbed()
            .setColor("CYAN")
            .setAuthor(`${client.user.username} Huggies!`, message.guild.iconURL)
            .setImage(body.link)
            .setTimestamp()
            .setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL)

                msg.edit(embed)
        })
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "hug",
  category: "Fun",
  description: "0w0 huggiessss",
  usage: "hug"
};
