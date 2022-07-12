const Discord = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
    name: 'help',
    description: 'to list of bot commands',
    run: async (client, message, args) => {
      
  const commands = client.commands.map(command => command.name).join(", ")
  const help = new Discord.MessageEmbed()
  .setTitle(`Neko Help!`)
  .setDescription(`Hello <@${message.member.id}> I am <@${client.user.id}>` + "\n\n" + `> A Discord Poll Bot with some cool features:` + "\n" + `> **⤷ __Commands__: ${commands}**`)
  .setTimestamp()
.setFooter(message.member.displayName, message.author.avatarURL())
  .setColor("RANDOM")
  .setThumbnail(client.user.displayAvatarURL()) 

      const button = new MessageActionRow()
const helpButtons = new MessageActionRow()
.addComponents(
new MessageButton()
    .setLabel('Invite')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=933426317007937558&permissions=8&scope=bot')
    .setStyle('LINK')
       .setEmoji('<:link:996410046772674591>'),

new MessageButton()
    .setLabel('Vote')
    .setURL('https://top.gg/bot/933426317007937558/vote')
    .setStyle('LINK')
  .setEmoji('<:topgg:991238441553645589>'),

new MessageButton()
    .setLabel('Support')
    .setURL('https://discord.gg/dEVMMBJrgZ')
    .setStyle('LINK')
  .setEmoji('<:question:987208716904431636>')
); 
  const catchErr = err => {
  console.log(err)
    }
  message.channel.send({ embeds : [help], components: [helpButtons] }).catch((e) => { console.error(e) })
}

}
