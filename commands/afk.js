const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "Afk",
                    icon_url: "https://i.imgyukle.com/2018/05/07/V49QH.th.png"
                  },
                description: "**:white_check_mark: You Are Afk Right Now**"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk'],
  permLevel: "User"
};

exports.help = {
  name: 'afk',
  category: 'General',
  description: 'You Can Be Afk',
  usage: 'afk'
};
//olmuyo POAMDPIAWNDLİJAWNAKWD