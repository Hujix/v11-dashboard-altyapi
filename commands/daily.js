const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
let para = db.fetch(`para_${message.author.id}`)
let altın = db.fetch(`altın_${message.author.id}`)
let şirket = db.fetch(`şirket_${message.author.id}`)
let kredi = db.fetch(`kredi_${message.author.id}`)  
let amaç = db.fetch(`şirketamac_${message.author.id}`)
let sirketdeğer = db.fetch(`şirketdeger_${message.author.id}`)
  
  if(!şirket) {
    var banka = new Discord.RichEmbed()
.setColor('#FB529C')
.setTitle('Banka-ATM')
.setDescription('Günlük maaşınız çekildi.Detaylar aşağıda yer alıyor.')
.addField('**:dollar:Çekilen maaş:**', '**100**')
.addField('**:credit_card:Kredi Kartı Kredisi:**', '**'+kredi+'**')
 .addField('Şirket Üzerine çekilen maaş:', '------------------------')
.addField('**Hata :warning:**', message.member.user.username + ' Adlı kullanıcının bir şirketi bulunmuyor!')
 .addField('Genellikle Sorulan Sorular:', '------------------------------')
.addField('Kredi Kartı Kredisini nasıl hesabıma geçirebilirim?:', '**!kredi** yazarak hesabınıza geçirebilir,kredi kartınıza para yükleyebilirsiniz.')
.addField('Nasıl Para Kazanabilirim?:', 'Yasin Ekonomi BOT size,gündelik olarak para verir.Bu değeri şirket açarak arttırabilirsiniz! şirket açmak için,**!şirket** kullanın.')
.addField('Şirket Ne işe yarar?:', 'Gündelik olarak kazandığınız parayı arttırır.')
.addField('Bot kurucusu ile nasıl iletişime geçerim?:', '[Destek Sunucumuza](https://discord.gg/6D7eX5Q) gelerek yapımcı ile iletişime geçebilirsin.')
.addField('Günlük Paramı nasıl alırım?:', '**!günlük** yazarak gündelik paranızı alabilirsiniz.')     
    .setThumbnail('https://image.flaticon.com/icons/svg/57/57426.svg')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addBlankField()
.setTimestamp()
message.channel.sendEmbed(banka) 
db.add(`para_${message.author.id}`, 100)    
return
  }

    var banka = new Discord.RichEmbed()
.setColor('#FB529C')
.setTitle('Banka-ATM')
.setDescription('Günlük maaşınız çekildi.Detaylar aşağıda yer alıyor.')
.addField('**:dollar:Çekilen maaş:**', '**100**')
.addField('**:credit_card:Kredi Kartı Kredisi:**', '**'+kredi+'**')
 .addField('Şirket Üzerine çekilen maaş:', '------------------------')
.addField(şirket + ' Üzerinden çekilen maaş:', '**1000**')
.addField('Sirket Para Değeri:', '**1000 Arttırıldı!**')
    .addField('Genellikle Sorulan Sorular:', '------------------------------')
.addField('Kredi Kartı Kredisini nasıl hesabıma geçirebilirim?:', '**!kredi** yazarak hesabınıza geçirebilir,kredi kartınıza para yükleyebilirsiniz.')
.addField('Nasıl Para Kazanabilirim?:', 'Yasin Ekonomi BOT size,gündelik olarak para verir.Bu değeri şirket açarak arttırabilirsiniz! şirket açmak için,**!şirket** kullanın.')
.addField('Şirket Ne işe yarar?:', 'Gündelik olarak kazandığınız parayı arttırır.')
.addField('Bot kurucusu ile nasıl iletişime geçerim?:', '[Destek Sunucumuza](https://discord.gg/6D7eX5Q) gelerek yapımcı ile iletişime geçebilirsin.')
.addField('Günlük Paramı nasıl alırım?:', '**!günlük** yazarak gündelik paranızı alabilirsiniz.')     
    .setThumbnail('https://image.flaticon.com/icons/svg/57/57426.svg')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addBlankField()
.setTimestamp()
message.channel.sendEmbed(banka) 
  db.add(`para_${message.author.id}`, 1100)
  db.add(`şirketdeger_${message.author.id}`, 1000)

};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: "User" 
};

exports.help = {
  name: 'daily',
  category: 'Economy',
  description: 'Daily Money!', 
  usage: 'daily'
};
