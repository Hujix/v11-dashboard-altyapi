const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
    
let para = db.fetch(`para_${message.author.id}`)
let altın = db.fetch(`altın_${message.author.id}`)
let şirket = db.fetch(`şirket_${message.author.id}`)
let kredi = db.fetch(`kredi_${message.author.id}`)  
let amaç = db.fetch(`şirketamac_${message.author.id}`)
let sirketdeğer = db.fetch(`şirketdeger_${message.author.id}`)
if(!args[0]) {
var banka = new Discord.RichEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setDescription('**!kredi** komutu bölümlere ayrılır,Mesela para yatırmak istiyorsanız; \n **!kredi yatır <tutar>** şeklinde olmalı.Mesela para çekmek istiyorsunuz; \n **!kredi çek <tutar>** şeklinde olmalı.birine para atmak istiyorsanız; **!kredi at <tutar>** şeklinde olmalı.')
.addField('Genellikle Sorulan Sorular:', '------------------------------')
.addField('Kredi Kartı Kredisini nasıl hesabıma geçirebilirim?:', '**!kredi** yazarak hesabınıza geçirebilir,kredi kartınıza para yükleyebilirsiniz.')
.addField('Nasıl Para Kazanabilirim?:', 'Yasin Ekonomi BOT size,gündelik olarak para verir.Bu değeri şirket açarak arttırabilirsiniz! şirket açmak için,**!şirket** kullanın.')
.addField('Şirket Ne işe yarar?:', 'Gündelik olarak kazandığınız parayı arttırır.')
.addField('Bot kurucusu ile nasıl iletişime geçerim?:', '[Destek Sunucumuza](https://discord.gg/6D7eX5Q) gelerek yapımcı ile iletişime geçebilirsin.')
.addField('Günlük Paramı nasıl alırım?:', '**!günlük** yazarak gündelik paranızı alabilirsiniz.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addBlankField()
.setTimestamp()
message.channel.sendEmbed(banka)  
return
}
  if(args[0] === "çek") {
  if(!args[1]) {
 var banka = new Discord.RichEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setDescription('Merhaba,**'+message.member.user.username + '**, \n Anlaşılan Kredi Kartından para çekmek istiyorsun.Çekmek istediğin miktarı belirtmen gerekiyor. \n **!kredi çek <miktar>** \n şeklinde tekrar yaz lütfen.')
.addField('Genellikle Sorulan Sorular:', '------------------------------')
.addField('Kredi Kartı Kredisini nasıl hesabıma geçirebilirim?:', '**!kredi** yazarak hesabınıza geçirebilir,kredi kartınıza para yükleyebilirsiniz.')
.addField('Nasıl Para Kazanabilirim?:', 'Yasin Ekonomi BOT size,gündelik olarak para verir.Bu değeri şirket açarak arttırabilirsiniz! şirket açmak için,**!şirket** kullanın.')
.addField('Şirket Ne işe yarar?:', 'Gündelik olarak kazandığınız parayı arttırır.')
.addField('Bot kurucusu ile nasıl iletişime geçerim?:', '[Destek Sunucumuza](https://discord.gg/6D7eX5Q) gelerek yapımcı ile iletişime geçebilirsin.')
.addField('Günlük Paramı nasıl alırım?:', '**!günlük** yazarak gündelik paranızı alabilirsiniz.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addBlankField()
.setTimestamp()
message.channel.sendEmbed(banka)   
return
 }   
 
    

    let eksik = args[1] ? args[1] - kredi : "0"    
 let eksik2 = eksik ? eksik + 5 : "0"
  if(kredi < eksik2) {
  

   var banka = new Discord.RichEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setDescription('Merhaba,**'+message.member.user.username + '**, \n Bize,**'+args[1]+'** kadar kartından para çekmek istediğini belirttin.Ama senin şu anda Kartında \n **----------------------------------** \n **' + kredi + '**:dollar: var. \n **'+args[1]+ '**:dollar: çekmek için; \n (çekim ücreti dahil) **'+ eksik2 +'** kadar krediye daha ihtiyacın var.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addBlankField()
.setTimestamp()
message.channel.sendEmbed(banka) 
  return
  }


    let sonuc = args[1] ? args[1] - 5 : "0"
    let toplam = kredi ? kredi - args[1] : "0"
db.set(`kredi_${message.author.id}`, - toplam)
db.add(`para_${message.author.id}`, + sonuc)
  
     var banka = new Discord.RichEmbed()
.setColor('GREEN')
.setTitle('**Başarılı!**')
.setThumbnail('https://image.flaticon.com/icons/svg/57/57426.svg')
.setDescription('Merhaba,**'+message.member.user.username + '**, \n Gerekli işlemleri başarıyla sisteme kaydettik.Detayları aşağıya bırakıyoruz! yine bekleriz :)')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addField('**+** Çekilen Para Miktarı:', '**'+args[1]+'**')
.addField('**-** Banka Yatırım Ücreti:', '**5**')
.addField('**-** Yatırım Ücretinden Sonra Çekilen Para:', sonuc)
.addField('**=** Kredi Kartında Kalan Miktar:', '**'+ toplam + '**')
.addBlankField()
.setTimestamp()
message.channel.sendEmbed(banka) 
 return 

  }
  
  ////////////////////////////////yatır 
  if(args[0] === "yatır") {
 if(!args[1]){
 var banka = new Discord.RichEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setDescription('Merhaba,**'+message.member.user.username + '**, \n Anlaşılan para yatırmak istiyorsun.Ama ne kadar yatıracağını belirtmedin. \n **!kredi yatır <miktar>** \n şeklinde tekrar yaz lütfen.')
.addField('Genellikle Sorulan Sorular:', '------------------------------')
.addField('Kredi Kartı Kredisini nasıl hesabıma geçirebilirim?:', '**!kredi** yazarak hesabınıza geçirebilir,kredi kartınıza para yükleyebilirsiniz.')
.addField('Nasıl Para Kazanabilirim?:', 'Yasin Ekonomi BOT size,gündelik olarak para verir.Bu değeri şirket açarak arttırabilirsiniz! şirket açmak için,**!şirket** kullanın.')
.addField('Şirket Ne işe yarar?:', 'Gündelik olarak kazandığınız parayı arttırır.')
.addField('Bot kurucusu ile nasıl iletişime geçerim?:', '[Destek Sunucumuza](https://discord.gg/6D7eX5Q) gelerek yapımcı ile iletişime geçebilirsin.')
.addField('Günlük Paramı nasıl alırım?:', '**!günlük** yazarak gündelik paranızı alabilirsiniz.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addBlankField()
.setTimestamp()
message.channel.sendEmbed(banka)   
return
 }   
 if(para < args[1]) {
 let eksik = args[1] ? args[1] - para : "0"
   var banka = new Discord.RichEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setThumbnail('https://3.bp.blogspot.com/-0YAAfhbWbK8/V85bbvTEv7I/AAAAAAAAAhY/kUK836tzsSw6dXdfUtRgngFWJUB3CqExACEw/s1600/Revitlink%2BDamien%2BWArnings.png')
.setDescription('Merhaba,**'+message.member.user.username + '**, \n Bize,**'+args[1]+'** kadar para yatırmak istediğini belirttin.Ama senin şu anda \n **----------------------------------** \n **' + para + '**:dollar: var. \n **'+args[1]+ '**:dollar: yatırmak için; \n **'+ eksik +'** kadar paraya daha ihtiyacın var.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addBlankField()
.setTimestamp()
message.channel.sendEmbed(banka)    
return
 }
let faiz = args[1] ? args[1] - 5 : "0"
    
    db.add(`kredi_${message.author.id}`, + faiz)
db.add(`para_${message.author.id}`, - args[1])
 let toplam = para ? para + kredi : "0"
   var banka = new Discord.RichEmbed()
.setColor('GREEN')
.setTitle('**Başarılı!**')
.setThumbnail('https://image.flaticon.com/icons/svg/57/57426.svg')
.setDescription('Merhaba,**'+message.member.user.username + '**, \n Gerekli işlemleri başarıyla sisteme kaydettik.Detayları aşağıya bırakıyoruz! yine bekleriz :)')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addField('**+** Yatırılan Para Miktarı:', '**'+args[1]+'**')
.addField('**-** Banka Yatırım Ücreti:', '**5**')
.addField('**=** Toplamda Kredi Kartına Yatırılan Miktar:', '**'+faiz+'**')
.addField('**=** Toplam Hesaptaki Miktar (kredi kartı miktarı + para miktarınız)', '**'+ toplam + '**')
.addBlankField()
.setTimestamp()
message.channel.sendEmbed(banka) 
 return
  }
  };
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['credi'], 
  permLevel: "User"
};

exports.help = {
  name: 'credi', 
  description: 'Shows Your Credi!', 
  usage: 'credi'
};
