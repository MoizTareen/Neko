const Discord = require("discord.js")
module.exports = {
    name: 'poll',
    description: 'to create a simple poll ',
    run: async (client, message, args) => {

      if(!message.member.permissions.has('MANAGE_GUILD')) return;
          let pollmsg = message.content.split(" ");
        pollmsg.shift();
        pollmsg = pollmsg.join(" ")
        if(!pollmsg) return message.reply("You have to provide something!")
        message.delete(2000)
        .then(() => {
        
            const poll = new Discord.MessageEmbed()
            .setTitle(message.member.displayName, message.author.avatarURL())
            .setColor("#FF0000")
            .setThumbnail(message.author.displayAvatarURL())
.setDescription(`**${pollmsg}**` +  "\n" + `✅: Yes` + "\n" + `❌: No`)
            message.channel.send({ embeds : [ poll ] }).catch((e) => { console.error(e) })

       .then(msg => {
                msg.react("✅")
                msg.react("❌")
            })
        })
 
}
    } 
