const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - Members Count : **${guild.memberCount}**`, guild.id);
      embed.setColor('#D97634')
      embed.setTitle('My Family')
      embed.setDescription(`We are in a big family! My family has as many servers as ** ${bot.guilds.size} **!`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "guilds",
  category: "System",
  description: "Shows all the servers the bot is in.",
  usage: "guilds"
};