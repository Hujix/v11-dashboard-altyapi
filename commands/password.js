const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let para = db.fetch(`para_${message.author.id}`)
let altın = db.fetch(`altın_${message.author.id}`)
let şirket = db.fetch(`şirket_${message.author.id}`)
let kredi = db.fetch(`kredi_${message.author.id}`)  
let amaç = db.fetch(`şirketamac_${message.author.id}`)
let sirketdeğer = db.fetch(`şirketdeger_${message.author.id}`)
let şifre = db.fetch(`sifre_${message.author.id}`)

if(şifre) {
  var embed = new Discord.RichEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setDescription('Anlaşılan bir şifre zaten eklemişsiniz :) \n **!şifre-al** yazarak şifrenizi tekrar alabilirsiniz.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addBlankField()
.setTimestamp()  
message.channel.sendEmbed(embed)
  return
}

  
  if(!args[0]) {
      var embed = new Discord.RichEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setDescription('Lütfen sisteme kayıt olacak olan kart şifrenizi girin; \n **!şifre 1234** gibi.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addBlankField()
.setTimestamp()  
 message.channel.sendEmbed(embed)
      return  
  }
  
  
  
    var embed3 = new Discord.RichEmbed()
.setColor('GREEN')
.setTitle('**Başarılı!**')
.setThumbnail('https://www.newcap.org/wp-content/uploads/2017/03/success-icon-1024x1024.gif')
.setDescription('Şifre Sisteme eklendi! Detaylar Özelden gönderiliyor!')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addBlankField()
.setTimestamp()  
message.channel.sendEmbed(embed3)

  
  var sayılar = [
"1237865463",
"0462956745",
"3458092458",
"3459809034",
"2347687097",
"5432467089",
"3456578098"

]
const sayı = sayılar[Math.floor(Math.random() * sayılar.length)];
    var basarılı = new Discord.RichEmbed()
.setColor('GREEN')
.setTitle('Banka Merkez')
.setThumbnail('https://www.newcap.org/wp-content/uploads/2017/03/success-icon-1024x1024.gif')
    .setDescription('Merhaba **'+message.member.user.username+'**, \n Şifre değiştirme talebinizi onayladık.Sisteme şifreniz giriş yaptı! detaylı bilgiler aşağıda;')
.addField(':credit_card: Kart Şifresi:', '**'+args[0]+'**')
.addField(':small_blue_diamond: Kart Sahibi:', '**'+message.member.user.username+'**')   
.addField(':small_blue_diamond:  Kart Sahibi İD:', '**'+message.author.id+'**')
.addField(':question: Kart Bilgileri: :grey_question:', '-------------------------------')
.addField(':no_entry_sign: Kredi Kartı Şirketi:', '**VakıfBANK**')
    .addField(':lock: Kart Basım Numarası:', '**'+sayı+'**')
.addField('Kart Bakiye Bilgisi:', '-------------------------------')
.addField(':dollar: Kart Bakiyesi', '**'+kredi+'**')
    .setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addBlankField()
.setTimestamp()  
message.author.send(basarılı)
db.set(`sifre_${message.author.id}`, args[0])

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['password'], 
  permLevel: "User"
};

exports.help = {
  name: 'password',
  category: 'Economy',
  description: 'Shows Your Credit Card And Bank.', 
  usage: 'password'
};
