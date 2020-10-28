const Discord = require("discord.js");
exports.run = (client, message, args) => {
     const msg = client.snipeMap.get(message.channel.id)
    if(!msg) return message.channel.send("There are no deleted messages in this channel!")
    const embed = new Discord.RichEmbed()
    .setAuthor(msg.author)
    .setDescription(msg.content)
    if(msg.image)embed.setImage(msg.image)
    
    message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "snipe",
  category: "General",
  description: "Snipe",
  usage: "snipe"
};
