const { RichEmbed } = require("discord.js")
exports.run = async (client, message, args, level) => {


   

    let kickMember = message.mentions.members.first() || message.guild.members.get(args[0]) 
    const settings = client.getSettings(message.guild);
    if(!kickMember) return message.channel.send("Please provide a user to kick!")

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "No reason given!"

    if(!message.guild.me.hasPermission(["KICK_MEMBERS"])) return message.channel.send("I dont have permission to do this!")

    kickMember.send(`Hello, you have been kicked from ${message.guild.name} for: ${reason}`).then(() => 
    kickMember.kick()).catch(err => console.log(err))

    message.channel.send(`**${kickMember.user.tag}** has been kicked`).then(m => m.delete(5000))

    let embed = new RichEmbed()
    .setColor("RED")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "kick")
    .addField("Mutee:", kickMember.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reason)
    .addField("Date:", message.createdAt.toLocaleString())
    
       // let sChannel = message.guild.channels.find(c => c.name === "mod-log")
            let sChannel = message.guild.channels.find("name", settings.modLogChannel)
        sChannel.send(embed)

    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Moderator"
  };
  
  exports.help = {
    name: "kick",
    category: "Moderation",
    description: "Kicks a user from the guild!",
    usage: "ban"
  };