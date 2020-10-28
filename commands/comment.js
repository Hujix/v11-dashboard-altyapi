const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
  const user = message.mentions.users.first() || message.author; 
  const sayMessage = args.join(" ");
//  const attachment = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
  const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTimestamp()
   	.setImage("https://some-random-api.ml/canvas/youtube-comment?avatar=https://cdn.discordapp.com/avatars/694963006970527826/5438aee40af7ffeb0630056ac0555962.png&comment=hi&username=reis");
 //message.channel.send({files: ["https://some-random-api.ml/canvas/youtube-comment?avatar=https://cdn.discordapp.com/avatars/694963006970527826/5438aee40af7ffeb0630056ac0555962.png&comment=hi&username=reis"]}
                  
);
   
  // + sayMessage +  + user.username https://some-random-api.ml/canvas/youtube-comment?avatar=" + user.avatarURL + "&comment=hi&username=yarak" 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "comment",
  description: "Comment on a YT video!",
  category: "Fun",
  usage: "comment"
};