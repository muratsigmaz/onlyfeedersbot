const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'koruma') {
    msg.reply('only feeders Koruma Aktif!');
  }
});

client.login('NTYwMjg1NDIxMDU4MzkyMDY1.D3xvcQ.DmUP3_sdz-Zcvnv4M0x7VHBUGyQ');