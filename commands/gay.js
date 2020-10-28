const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
     const user = message.mentions.users.first() || message.author; 
  const embed = new Discord.RichEmbed()
  .setColor("RED")
  .setTimestamp()
 	.setImage('https://some-random-api.ml/canvas/gay?avatar=' + user.avatarURL);
  message.channel.send(embed);
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "gay",
  description: "commit gay",
  category: "Fun",
  usage: "gay"
};