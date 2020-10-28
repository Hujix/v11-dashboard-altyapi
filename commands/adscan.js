const Discord = require('discord.js')

exports.run = (client, message, args) => {
  

    const members = message.guild.members.filter(member => member.user.presence.game && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.game.name));
    const memberss = message.guild.members.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
    const embed = new Discord.RichEmbed()
        .addField('Status ads:', members.map(member => `${member} = ${member.user.presence.game.name}`).join("\n") || "No one has status ad.")
        .addField('Name ads:', memberss.map(member => `${member} = ${member.user.username}`).join("\n") || "No one has name ad.")
        .setColor("RANDOM")
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Moderator"
}

exports.help = {
  name: 'adscan',
  category: 'Moderation',
  description: 'Scans ads of users.',
  usage: 'adscan'
}