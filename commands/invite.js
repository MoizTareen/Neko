const Discord = require("discord.js")
module.exports = {
    name: 'invite',
    description: 'invite the bot to your server',
    run: async (client, message, args) => {

      const invite = new Discord.MessageEmbed()
  .setDescription("**[Neko! Click me to invite me to your server!](   https://discord.com/api/oauth2/authorize?client_id=933426317007937558&permissions=8&scope=bot)**")
  .setColor("RANDOM")
  message.channel.send({embeds:[invite]}).catch((e) => { console.error(e) })
 
}
    } 
