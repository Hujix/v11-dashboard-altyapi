const Discord = require('discord.js');

exports.run = function(client, message, args) {
  let guild = message.guild
  let [link, ad] = args.join(" ").split(" - ");
  if (!link) return message.channel.send(`Type a link.`)
  if (!ad) return message.channel.send(`Type a name.`)
  
  guild.createEmoji(link, ad)
    .then(emoji => message.channel.send(`I created Emoji named ${emoji.name}. (${emoji})`))
    .catch(console.error);
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['add-emoji','addemoji'],
  permLevel: "Administrator"
};

exports.help = {
  name: 'addemoji',
  category: "General",
  description: 'Adds emoji to the server.',
  usage: 'addemoji <link> - <name>'
};