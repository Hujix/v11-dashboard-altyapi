const { RichEmbed } = require("discord.js")


exports.run = async (client, message, args, level) => {


		const settings = client.getSettings(message.guild);
	if(isNaN(args[0])) return message.channel.send("You need to provide an ID.")
    let bannedMember = await bot.fetchUser(args[0])
        if(!bannedMember) return message.channel.send("Please provide a user id to unban someone!")

    let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason given!"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS"])) return message.channel.send("I dont have permission to perform this command!")|
    message.delete()
    try {
        message.guild.unban(bannedMember, reason)
        message.channel.send(`${bannedMember.tag} has been unbanned from the guild!`)
    } catch(e) {
        console.log(e.message)
    }

    let embed = new RichEmbed()
    .setColor(redlight)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "unban")
    .addField("Moderated on:", `${bannedMember.username} (${bannedMember.id})`)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reason)
    .addField("Date:", message.createdAt.toLocaleString())
    
        let sChannel = message.guild.channels.find("name", settings.modLogChannel)
        sChannel.send(embed)

    }
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: "Administrator"
      };
      
      exports.help = {
        name: "unban",
        category: "Moderation",
        description: "Unbans a user from the guild!",
        usage: "unban"
      };
