const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
 // const friendly = client.config.permLevels.find(l => l.level === level).name;
   const user = message.mentions.users.first() || message.author; 
     const avatarEmbed = new Discord.RichEmbed()
     
        .setColor(0x333333)
        .setAuthor(user.username)
        .setImage(user.avatarURL);
    message.channel.send(avatarEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["av"],
  permLevel: "User"
};

exports.help = {
  name: "avatar",
  category: "General",
  description: "Shows your avatar.",
  usage: "avatar"
};
