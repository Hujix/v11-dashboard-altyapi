const { RichEmbed } = require("discord.js")
exports.run = async (client, message, args, level) => {

    let sEmbed = new RichEmbed()
        .setColor("cyan")
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
        .addField("**Guild Name:**", `${message.guild.name}`, true)
        .addField("**Guild Owner:**", `${message.guild.owner}`, true)
        .addField("**Member Count:**", `${message.guild.memberCount}`, true)
        .addField("**Role Count:**", `${message.guild.roles.size}`, true)
        .setFooter(`Spra | Footer`, client.user.displayAvatarURL);
    message.channel.send(sEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["si"],
  permLevel: "User"
};

exports.help = {
  name: "serverinfo",
  category: "General",
  description: "Shows server info",
  usage: "serverinfo"
};