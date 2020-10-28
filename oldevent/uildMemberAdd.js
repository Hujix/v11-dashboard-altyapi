// This event executes when a new member joins a server. Let's welcome them!
const Captcha = require("@haileybot/captcha-generator");
module.exports = async (client, member) => {
  if (settings.captchaEnabled !== "true") return;
  let captcha = new Captcha();
  // Load the guild's settings
     let channel = member.guild.channels.cache.find((x) => x.name === settings.verifyChannel)


    let vrole = member.guild.roles.cache.find((x) => x.name === settings.nonverifiedrole)
    let vrrole = member.guild.roles.cache.find((x) => x.name === settings.verifiedrole)

    

    member.roles.add(vrole)
    const attachment = new discord.MessageAttachment(captcha.PNGStream, "captcha.png")
    const verifycode = await channel.send("**Type the following code to verify.**", attachment)
    let collector = channel.createMessageCollector(
        m => m.author.id === member.id
    )

    collector.on("collect", m => {
        if(m.content.toUpperCase() === captcha.value) {
            member.roles.remove(vrole)
            member.send("You were successfully verified.")
            member.roles.add(vrrole)
        } else if(m.content.toUpperCase() !== captcha.value) {
            m.delete()
            verifycode.delete()

            member.send("Verification failed, rejoin to verify again.")

           
        } else{
            verifycode.delete()
        }
    })


  
  // If welcome is off, don't proceed (don't welcome the user)
  if (settings.welcomeEnabled !== "true") return;

  // Replace the placeholders in the welcome message with actual data
  const welcomeMessage = settings.welcomeMessage.replace("{{user}}", member.user.tag);

  // Send the welcome message to the welcome channel
  // There's a place for more configs here.
  member.guild.channels.find("name", settings.welcomeChannel).send(welcomeMessage).catch(console.error);
};