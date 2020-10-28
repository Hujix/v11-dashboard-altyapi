const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => { 
  let şifre = db.fetch(`sifre_${message.author.id}`)
  if(!şifre) {
    var embed = new Discord.RichEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setDescription('Anlaşılan bir şifre almamışsınız :) \n **!şifre** yazarak şifrenizi alabilirsiniz.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addBlankField()
.setTimestamp()  
message.channel.sendEmbed(embed)  
 return
  }
 message.channel.send(message.member.user.username + ' Kart Şifrenizi özelden yolladım') 
  
    var embed = new Discord.RichEmbed()
.setColor('RED')
.setTitle('Banka Merkezi')
.setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setDescription('Selam '+ message.member.user.username + ', \n İşte kart Şifreniz:**' + şifre + '**')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addBlankField()
.setTimestamp()  
  
  
message.author.send(embed)

};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: "User" 
};

exports.help = {
  name: 'password-give',
  category: 'Economy',
  description: 'Give You A Password!', 
  usage: 'password-give'
};
