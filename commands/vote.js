const Discord = require("discord.js")
module.exports = {
    name: 'vote',
    description: 'to vote for bot on top.gg',
    run: async (client, message, args) => {

        const vote = new Discord.MessageEmbed()
  .setDescription("**[Neko! Click me to vote for me on top.gg]( https://top.gg/bot/933426317007937558/vote)**")
  .setColor("RANDOM")
  message.channel.send({embeds:[vote]}).catch((e) => { console.error(e) })
 
}
    } 
