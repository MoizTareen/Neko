const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"]
});

const { prefix, token} = require("./config.json");


//===========status============//
client.on("ready", () => {
    client.user.setStatus("online");
    client.user.setActivity('n!help | n!invite', { type: 'WATCHING' });
    console.log(`Logged in as ${client.user.tag}!`);
});
//=========guild join============//
client.on("guildCreate", guild => {
{
client.channels.cache.get("982173975528488990").send(`> *New guild joined: **${guild.name}** (id: **${guild.id}**) This guild has **${guild.memberCount} members**! Now i am in **${client.guilds.cache.size} **guilds*`)
}
});  

//=========guild leave===========//
client.on("guildDelete", guild => {
{
client.channels.cache.get("982173975528488990").send(`> *Guild left: **${guild.name}** (id: **${guild.id}**). This guild had **${guild.memberCount}** members now I am in **${client.guilds.cache.size}** guilds!*`)
}
});  
//======cmnd handler===========//

const fs = require("fs");
client.commands = new Discord.Collection()
const commandList = []

const commands = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commands) {
    const command = require(`./commands/${file}`)
    commandList.push(`${file.split('.'[0])}`)
    client.commands.set(command.name, command)
}
 console.log(`Sucessfully loaded: ${commands}`)

client.on("messageCreate", message => {
 if(message.content.startsWith(prefix)) {
 const args = message.content.slice(prefix.length).trim().split(/ +/g)
 const commandName = args.shift().toLowerCase()
 const command = client.commands.get(commandName)
 if (!command) return
 command.run(client, message, args)
 }
});

//=====logging into client=====//
client.login(token)