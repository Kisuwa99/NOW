const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let clockEmbed = new Discord.RichEmbed()
  .setDescription(" ")
  .setColor("#f4f26e")
  .addField(":alarm_clock: Time ", message.createdAt);
  message.delete().catch(O_o=>{});
  return message.channel.send(clockEmbed);
}
module.exports.help = {
  name: "clock"
}
