const { RichEmbed } = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

exports.run = async(client, message, args) => {
    var aylar = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
    }
    var duration = moment.duration(client.uptime).format(" D [Day] H [Hour] m [Minute] s [Second]")
    let rol = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(rol => rol.id === args[0]);
    
        var embed = new RichEmbed()
            
            .addField("Role Name", rol.name, true)
            .addField('How many people have it', rol.members.size, true)
            .addField('Role Color', rol.hexColor, true)
            .addField('Creation Date', `${moment(rol.createdAt).format('DD')} ${aylar[moment(rol.createdAt).format('MM')]} ${moment(rol.createdAt).format('YYYY HH:mm:ss')}`, true)
            .addField('ID', rol.id, true);
    return message.channel.send(embed)
        
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ri"],
  permLevel: 0,
}

exports.help = {
  name: 'roleinfo',
  category: "General",
  description: 'Shows role info.',
  usage: "roleinfo"
};