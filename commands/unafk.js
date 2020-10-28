
const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "Afk",
                    icon_url: "https://i.hizliresim.com/A193Xp.png"
                  },
                description: "**:negative_squared_cross_mark:  You Will No Longer AFK**"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afkkapat'],
  permLevel: "User"
};

exports.help = {
  name: 'unafk',
  category: "General",
  description: 'Unafk',
  usage: 'unafk'
};
