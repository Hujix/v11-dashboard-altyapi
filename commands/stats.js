const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [day], H [hour], m [minute], s [second]");

  let msg = message
   const bunemq = moment.duration(bot.uptime).format(" D [day], H [hour], m [minute], s [second]");
   const annencilermaldır = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Spra  \'My Stats', bot.user.avatarURL)
  .addField("» **Memory Usage**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)  
  .addField("» **Operation time**", bunemq)
  .addField('» **Number of Servers Playing Music**;', bot.voiceConnections.size)
  .addField('» **Users**:', bot.guilds.reduce((a, b) => a + b.memberCount, 0))
  .addField("» **Guilds**", bot.guilds.size.toLocaleString(), true)
  .addField("» **Channels**", bot.channels.size.toLocaleString(), true)
  .addField("» **Discord.JS Version**", "v"+Discord.version, true)
  .addField("» **Node.JS Version**", `${process.version}`, true)
  .addField("» **Ping**", bot.ping+" ms", true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **OS**", `\`\`${os.platform()}\`\``) 
  .addField("**» Bot Invite**", " [Invite](https://discord.com/oauth2/authorize?client_id=760772786955747329&scope=bot&permissions=2146958847)", )
  .addField("**» Support Server**", " [Join Support Server](https://discord.gg/bVtgPwv)", )
 return message.channel.send(annencilermaldır);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i'],
  permLevel: "User"
};

exports.help = {
  name: "stats",
  category: "General",
  description: "Gives Useful Bots Statics",
  usage: "stats"
};