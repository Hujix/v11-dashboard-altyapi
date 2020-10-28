const { RichEmbed } = require("discord.js")


exports.run = async (client, message, args, level) => {
   const user = message.mentions.users.first() || message.author; 
    let uEmbed = new RichEmbed()
        .setColor("red")
        .setTitle("User Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${user.username} Info`, user.displayAvatarURL)
        .addField("**Username:**", `${user.username}`, true)
        .addField("**Discriminator:**", `${user.discriminator}`, true)
        .addField("**ID:**", `${user.id}`, true)
        .addField("**Status:**", `${user.presence.status}`, true)
        .addField("**Created At:**", `${user.createdAt}`, true)
        .setFooter(`Spra | Footer`, client.user.displayAvatarURL);

    message.channel.send(uEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ui"],
  permLevel: "User"
};

exports.help = {
  name: "userinfo",
  category: "General",
  description: "Shows User Info.",
  usage: "ui"
};

