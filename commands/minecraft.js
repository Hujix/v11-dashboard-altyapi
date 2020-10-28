

const { RichEmbed } = require("discord.js")
const fetch = require('node-fetch');




exports.run = async (client, message, args, level) => {
   const settings = client.getSettings(message.guild);
        let msg = await message.channel.send("Generating...")
        const rgs = message.content.slice(settings.prefix.length).trim().split(/ +/g);
const name = rgs.join(" ");
 
        fetch("https://some-random-api.ml/mc?username=" + name)
        .then(res => res.json()).then(body => {
            if(!body) return message.reply(" whoops. I broke, try again!")

            let embed = new RichEmbed()
            .setColor("CYAN")
          //  .setAuthor(`${client.user.username} Huggies!`, message.guild.iconURL)
            .addField('Username', body.username)
            .addField('Uuid', body.uuid)
            .addField('Name History', body.name_history)
            .addField('Name History', body.changedToAt)
            

           // .setImage(body.link)
            .setTimestamp()
            .setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL)

                msg.edit(embed)
        })
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mc"],
  permLevel: "User"
};

exports.help = {
  name: "minecraft",
  category: "Fun",
  description: "Gives Minecraft user Info",
  usage: "minecraft <name>"
};
