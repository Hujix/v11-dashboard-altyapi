const { RichEmbed } = require("discord.js")
const fetch = require('node-fetch');

exports.run = async (client, message, args, level) => {
   
        let msg = await message.channel.send("Generating...")

        fetch("http://aws.random.cat/meow")
        .then(res => res.json()).then(body => {
            if(!body) return message.reply(" whoops. I broke, try again!")

            let embed = new RichEmbed()
            .setColor("CYAN")
            .setAuthor(`${client.user.username} Cats!`, message.guild.iconURL)
            .setImage(body.file)
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
        name: "cat",
        category: "Fun",
        description: "Cattosss!!!",
        usage: "cat"
      };