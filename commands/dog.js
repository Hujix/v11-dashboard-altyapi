const { RichEmbed } = require("discord.js")
const fetch = require('node-fetch');

exports.run = async (client, message, args, level) => {
   
        let msg = await message.channel.send("Generating...")

        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json()).then(body => {
            if(!body) return message.reply(" whoops. I broke, try again!")

            let embed = new RichEmbed()
            .setColor("CYAN")
            .setAuthor(`${client.user.username} Dogs!`, message.guild.iconURL)
            .setImage(body.message)
            .setTimestamp()
            .setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL)

                msg.edit(embed)
        })
    }

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: "User"
      };
      
      exports.help = {
        name: "dog",
        category: "Fun",
        description: "Doggosss!!!",
        usage: "dog"
      };