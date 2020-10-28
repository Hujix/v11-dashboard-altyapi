const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const settings = client.getSettings(message.guild);
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Warning you cant use `warn` command in dms   ')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild     
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find("name", settings.modLogChannel)
  if (!modlog) return message.reply('I cant find `mod-log` channel');
  if (reason.length < 1) return message.reply('You need to mention someone');
  if (message.mentions.users.size < 1) return message.reply('You need to write a reason').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0xD97634)
  .setTimestamp()
  .addField('Command',  'Warn')
  .addField('Member', `${user.username}#${user.discriminator}`)
  .addField('Moderator', `${message.author.username}#${message.author.discriminator}`)
  .addField('Reason', reason);
  return guild.channels.get(modlog.id).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Moderator"
};

exports.help = {
  name: 'warn',
  description: 'Warns a user from the guild!',
  category: "Moderation",
  usage: 'warn'
};
