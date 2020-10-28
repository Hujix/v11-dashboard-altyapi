

module.exports = (client, member) => {
  // Load the guild's settings
  const settings = client.getSettings(member.guild);

  
  // If welcome is off, don't proceed (don't welcome the user)
  if (settings.goodbyeEnabled !== "true") return;

  // Replace the placeholders in the welcome message with actual data
  const goodbyeMessage = settings.goodbyeMessage.replace("{{user}}", member.user.tag);

  // Send the welcome message to the welcome channel
  // There's a place for more configs here.
  member.guild.channels.find("name", settings.goodbyeChannel).send(goodbyeMessage).catch(console.error);
};
