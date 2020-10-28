const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async(client, message, args) => {
  let okul = new Date('2021-01-01:00:00')
    let zaman = ms(okul - Date.now())
    message.channel.send(`To the celebration of the new year **${zaman.days}** days, **${zaman.hours}** hours **${zaman.minutes}** minute to celebrate`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: 'christmas',
  category: "Fun",
  description: 'New Year!',
usage: ""
};