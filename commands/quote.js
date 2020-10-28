

const { RichEmbed } = require("discord.js")
const fetch = require('node-fetch');

exports.run = async (client, message, args, level) => {
   
        let msg = await message.channel.send("Generating...")

        fetch("https://some-random-api.ml/animu/quote")
        .then(res => res.json()).then(body => {
            if(!body) return message.reply(" whoops. I broke, try again!")

            let embed = new RichEmbed()
            .setColor("CYAN")
          //  .setAuthor(`${client.user.username} Huggies!`, message.guild.iconURL)
            .addField('Characther', body.characther)
            .addField('Quote', body.sentence)
            .addField('Anime', body.anime)

           // .setImage(body.link)
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
  name: "quote",
  category: "Fun",
  description: "An anime quote",
  usage: "quote"
};
