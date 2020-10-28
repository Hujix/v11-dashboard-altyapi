const Discord = require('discord.js')
const moment = require('moment')
exports.run = async (client, message, args) => {

       var verti = message.guild.verificationLevel;
   const vertific = ['None', 'Low', 'Medium', 'High', 'Highest'];
	let region = {
			"us-central": "America :flag_us:",
			"us-east": "East America :flag_us:",
			"us-south": "South America :flag_us:",
			"us-west": "West America :flag_us:",
			"eu-west": "West Europe :flag_eu:",
			"eu-central": "Europe:flag_eu:",
			"singapore": "SingapORE :flag_sg:",
			"london": "London :flag_gb:",
			"japan": "Japan:flag_jp:",
			"russia": "Russia :flag_ru:",
			"hongkong": "Hong Kong :flag_hk:",
			"brazil": "Brazil :flag_br:",
			"singapore": "Singapore :flag_sg:",
			"sydney": "Sydney :flag_au:",
			"southafrica": "South Africa :flag_za:"
	}
let kur = {
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
    	
    

	const embed = new Discord.RichEmbed()
		.setAuthor(`${message.guild.name} | Server Info`)
		.addField('Server Owner', `${message.guild.owner} ??`)
		.addField('Server ID', message.guild.id)
		.addField('Server Creation Date', `${moment(message.guild.createdAt).format('DD')} ${kur[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY h:mm:ss')}`)
		.addField('Sunucu Kurulum Konumu', region[message.guild.region])
		.addField(`Channels [${message.guild.channels.size}]`, `${message.guild.channels.filter(c => c.type === "text").size} Text  \n${message.guild.channels.filter(c => c.type === "voice").size} Voice \n${message.guild.channels.filter(c => c.type === 'category').size} Category`)
		.addField(`Users [${message.guild.members.size}]`, ` ${message.guild.members.filter(m => m.user.presence.status === "online").size} Online \n ${message.guild.members.filter(m => m.user.presence.status === "idle").size} Idle \n${message.guild.members.filter(m => m.user.presence.status === "streaming").size} Streaming \n ${message.guild.members.filter(m => m.user.presence.status === "dnd").size} Do Not Disturb \n  ${message.guild.members.filter(m => m.user.presence.status === "offline").size} Offline \n ${message.guild.members.filter(m => m.user.bot).size} Bot`)
		.addField('AFK Channel', message.guild.afkChannel || 'None')
		.addField('AFK Time Out', `${message.guild.afkTimeout} seconds`)
     //     .addField(`Emoji [${message.guild.emojis.size}]`, `!emojiler yazarak sunucudaki bütün emojileri görüntüleyebilirsiniz.`)
		//.addField(`Rol   [${message.guild.roles.size - 1}]`, `!roller yazarak sunucudaki bütün rolleri görüntüleyebilirsiniz.`)
        .addField('Verification level', `${vertific[message.guild.verificationLevel]}`)
  
  
		.setThumbnail(message.guild.iconURL)
		.setColor('RANDOM')
		.setTimestamp()
	message.channel.send({embed})


};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["si"],
  permLevel: "User"
};

exports.help = {
  name: "serverinfo",
  category: "General",
  description: "Shows server info",
  usage: "serverinfo"
};