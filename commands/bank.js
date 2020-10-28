
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
.setTitle('Banka Ana Merkez')
.setThumbnail('http://www.free-icons-download.net/images/bank-logo-icon-70261.png')
.addField(':dollar: Bakiye Miktarı:', '**'+para+'**')
.addField('🌟 Altın Miktarı:', '**'+altın+'**')
.addField(':credit_card: Kredi Kartı Kredisi:', '**'+kredi+'**')
.addField('Şirket Bilgileri:', '------------------------------')
.addField('**Hata :warning:**', message.member.user.username + ' Adlı kullanıcının bir şirketi bulunmuyor!')
.addField('Genellikle Sorulan Sorular:', '------------------------------')
.addField('Kredi Kartı Kredisini nasıl hesabıma geçirebilirim?:', '**!kredi** yazarak hesabınıza geçirebilir,kredi kartınıza para yükleyebilirsiniz.')
.addField('Nasıl Para Kazanabilirim?:', 'Yasin Ekonomi BOT size,gündelik olarak para verir.Bu değeri şirket açarak arttırabilirsiniz! şirket açmak için,**!şirket** kullanın.')
.addField('Şirket Ne işe yarar?:', 'Gündelik olarak kazandığınız parayı arttırır.')
.addField('Bot kurucusu ile nasıl iletişime geçerim?:', '[Destek Sunucumuza](YOK) gelerek yapımcı ile iletişime geçebilirsin.')
.addField('Günlük Paramı nasıl alırım?:', '**!günlük** yazarak gündelik paranızı alabilirsiniz.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addBlankField()
.setTimestamp()
message.channel.sendEmbed(banka)  
return
}




var banka = new Discord.RichEmbed()
.setColor('#FB529C')
.setTitle('Banka Ana Merkez')
.setThumbnail('http://www.free-icons-download.net/images/bank-logo-icon-70261.png')
.addField(':dollar: Bakiye Miktarı:', '**'+para+'**')
.addField('🌟 Altın Miktarı:', '**'+altın+'**')
.addField(':credit_card: Kredi Kartı Kredisi:', '**'+kredi+'**')
.addField('Şirket Bilgileri:', '------------------------------')
.addField('Şirket İsmi:', '**'+şirket+'**')
.addField('Şirket Kuruluş Amacı:', '**'+amaç+'**')
.addField('Şirket Para Değeri:', '**'+sirketdeğer+'**')
.addField('Şirket Kurucusu:', '**'+message.member.user.username+'**')
.addField('Şirket Kurucusu İD:', '**'+message.member.id+'**')
.addField('Genellikle Sorulan Sorular:', '------------------------------')
.addField('Kredi Kartı Kredisini nasıl hesabıma geçirebilirim?:', '**!kredi** yazarak hesabınıza geçirebilir,kredi kartınıza para yükleyebilirsiniz.')
.addField('Nasıl Para Kazanabilirim?:', 'Yasin Ekonomi BOT size,gündelik olarak para verir.Bu değeri şirket açarak arttırabilirsiniz! şirket açmak için,**!şirket** kullanın.')
.addField('Şirket Ne işe yarar?:', 'Gündelik olarak kazandığınız parayı arttırır.')
.addField('Bot kurucusu ile nasıl iletişime geçerim?:', '[Destek Sunucumuza](https://discord.gg/6D7eX5Q) gelerek yapımcı ile iletişime geçebilirsin.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addBlankField()
.setTimestamp()
message.channel.sendEmbed(banka)






};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['bank','banks'], 
  permLevel: "User"
};

exports.help = {
  name: 'bank',
  category: 'Economy',
  description: 'Shows Your Money And More!', 
  usage: 'bank' 
};
