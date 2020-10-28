const { RichEmbed } = require("discord.js")


exports.run = async (client, message, args, level) => {
    const settings = client.getSettings(message.guild);

// check if the command caller has permission to use the command
if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to add roles!")

//define the reason and unmutee
let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!mutee) return message.channel.send("Please supply a user to be muted!");

let reason = args.slice(1).join(" ");
if(!reason) reason = "No reason given"

//define mute role and if the mute role doesnt exist then send a message
let muterole = message.guild.roles.find(r => r.name === "Muted")
if(!muterole) return message.channel.send("There is no mute role to remove!")

//remove role to the mentioned user and also send the user a dm explaing where and why they were unmuted
mutee.removeRole(muterole.id).then(() => {
    message.delete()
    mutee.send(`Hello, you have been unmuted in ${message.guild.name} for: ${reason}`).catch(err => console.log(err))
    message.channel.send(`${mutee.user.username} was unmuted!`)
})

//send an embed to the modlogs channel
let embed = new RichEmbed()
.setColor("RED")
.setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
.addField("Moderation:", "unmute")
.addField("Mutee:", mutee.user.username)
.addField("Moderator:", message.author.username)
.addField("Reason:", reason)
.addField("Date:", message.createdAt.toLocaleString())

//let sChannel = message.guild.channels.find(c => c.name === "mod-log")
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
        name: "unmute",
        category: "Moderation",
        description: "Unmutes a user from the guild!",
        usage: "unmute"
      };