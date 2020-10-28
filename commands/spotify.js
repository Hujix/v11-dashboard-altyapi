const Discord = require("discord.js");
exports.run = async (bot, message, args, user) => {
    var user = message.mentions.users.first() || message.author; 
   // if (!args[0]) return message.channel.send("**Please tag someone!**")
  
   if (user.presence.game && user.presence.game.name === 'Spotify' && user.presence.game.type === 2) {
   try  {
        var trackImg = user.presence.game.assets.largeImageURL;
            var trackUrl = `https://open.spotify.com/track/${user.presence.game.syncID}`;
            var trackName = user.presence.game.details;
            var trackAuthor = user.presence.game.state;
      var trackAlbum = user.presence.game.assets.largeText;

            const embed = new Discord.RichEmbed()
                .setAuthor('Spotify Song info', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2000px-Spotify_logo_without_text.svg.png')
                .setColor(0xdb954)
              .setThumbnail(trackImg)
                .setFooter(`Spra BOT Spotify `, "https://cdn.discordapp.com/emojis/515260605347659777.png?v=1")
                .setDescription(`
\ Song name;  \**${trackName}**\n
\ Album name;  \**${trackAlbum}**\n
\ Author;  \**${trackAuthor}**\n
`)
                .addField('Song link:', `**[${trackUrl}](${trackUrl})**`, false);
                
            return message.channel.send(embed);
        return message.channel.send(embed);

        } catch (error) {
            return message.channel.send(` **${user.tag}** is not listening to Spotify.`);
        }

    } else {
        return message.channel.send(`**${user.tag}** didnt added Spotify to their Discord account.`);
    }

       
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['spo', 'spoti', 'soti', 'spotif', 'spotifyy'],
  permLevel: "User"
};

exports.help = {
  name: 'spotify',
  category: "General",
  description: 'Look what does user listen to in Spotify!',
  usage: 'spotify'
};