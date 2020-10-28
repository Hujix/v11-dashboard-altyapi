const Discord = require('discord.js');
const request = require('node-superfetch');
const moment = require('moment');
require('moment-duration-format');

exports.run = async (client, msg, args) => {
  
  
 
  
  const aylar = {
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
    
  const query = args.slice(0).join(' ');
  if (!query) return msg.reply('Please enter game name!')
  
  if (query === "minecraft" || query === "mc" || query === "Minecraft" || query === "MC" || query === "Mc" || query === "MİNECRAFT" || query === "MINECRAFT" ) {
    try {
      
    var p = ["Android", "iOS", "XBOX ONE", "XBOX 360", "Raspberry Pi", "PlayStation 3", "PlayStation 4", "PlayStation Vita", "Nintendo Switch", "Windows Phone", "Amozon Device", "Windows", "Mac", "Linux"]
      
    const embed = new Discord.RichEmbed()
				.setColor("RANDOM")
				.setAuthor(`Minecraft - Game Infos`, 'https://img00.deviantart.net/9cc9/i/2011/008/6/1/minecraft_hd_icon___mac___pc_by_hunterkharon-d36qrs5.png')
				.setURL(`http://minecraft.net/`)
				.setThumbnail('https://i.ytimg.com/vi/SQq6IDdBNGk/maxresdefault.jpg')
				.addField('Price', "[23,95 EUR](https://minecraft.net/tr-tr/?ref=m)")
				.addField('Meta score', "93" || 'Bulunamadı')
				.addField('Number of Suggestions', 'Bulunamadı')
				.addField('Platforms', p.join(', ') || 'Bulunamadı')
				.addField('Publish Date', "16/06/2009" || 'Bulunamadı')
				.addField('^Number of DLCS', "0")
				.addField('Developers', "Mojang Inc, Microsoft Corporation" || 'Bulunamadı')
				.addField('Publishers', "Microsoft Corporation" || 'Bulunamadı');
			return msg.channel.send(embed);
		} catch (err) {
			return msg.reply(`An error occured! \n**Error:** \n\`${err.message}\``);
    }
    return;
  }
  
  try {
			const id = await search(query);
			if (!id) return msg.reply('Cannot find.');
			const data = await fetchGame(id);
			const current = data.price_overview ? `$${data.price_overview.final / 100}` : 'Ücretsiz';
			const original = data.price_overview ? `$${data.price_overview.initial / 100}` : 'Ücretsiz';
			const price = current === original ? current : `~~${original}~~ ${current}`;
			const platforms = [];
			if (data.platforms) {
				if (data.platforms.windows) platforms.push('Windows');
				if (data.platforms.mac) platforms.push('Mac');
				if (data.platforms.linux) platforms.push('Linux');
			}
			const embed = new Discord.RichEmbed()
				.setColor("RANDOM")
				.setAuthor(`${data.name} - Game Infos`, 'https://i.imgur.com/xxr2UBZ.png', 'http://store.steampowered.com/')
				.setURL(`http://store.steampowered.com/app/${data.steam_appid}`)
				.setThumbnail(data.header_image)
				.addField('Price', price)
				.addField('Meta Score', data.metacritic ? data.metacritic.score : 'Cannot find')
				.addField('Number of Suggestions', data.recommendations ? data.recommendations.total : 'Cannot find')
				.addField('Platforms', platforms.join(', ') || 'Cannot find')
        .addField('Publish Date', data.release_date.date || 'Cannot find')
				.addField('Number of DLCS', data.dlc ? data.dlc.length : "0")
				.addField('Developers', data.developers ? data.developers.join(', ') || 'Cannot find' : 'Cannot find')
				.addField('Publishers', data.publishers ? data.publishers.join(', ') || 'Cannot find' : 'Cannot find');
			return msg.channel.send(embed);
		} catch (err) {
			return msg.reply(`An error occured! \n**Error:** \n\`${err.message}\``);
    }
  
};

  async function search(query) {
    const { body } = await request
        .get('https://store.steampowered.com/api/storesearch')
        .query({
            cc: 'tr',
            l: 'tr',
            term: query
        });
    if (!body.items.length) return null;
    return body.items[0].id;
}

async function fetchGame(id) {
    const { body } = await request
        .get('https://store.steampowered.com/api/appdetails')
        .query({ appids: id });
    return body[id.toString()].data;
}
;

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['searchgame'],
  permLevel: "User"
};

exports.help = {
  name: 'searchgame',
  category: 'General',
  description: 'Search a game on Steam!',
  usage: 'serachgame <game name>'
};