const Discord = require("discord.js");
const simplydjs = require('simply-djs');
module.exports = {
    name: 'embed',
    description: 'creates op embed ',
    run: async (client, message, args) => {

if(!message.member.permissions.has('MANAGE_GUILD')) return;    
    simplydjs.embedCreate(message).catch((e) => { console.error(e) })
      
}
    } 
