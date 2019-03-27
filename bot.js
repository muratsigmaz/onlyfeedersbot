const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');



var prefix = ayarlar.prefix;


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam Hoşgeldin Bizimle Daha İleriye !');
  }
});

client.on('message', msg => {
  if (msg.content === 'Sunucu') {
    msg.reply('Sunucuyu Sen Boşversene Bak Dalgana Biz Büyüyoruz At Kafalılar Düşünsün!');
  }
});

cclient.on('message', msg => {
  if (msg.content === 'murat') {
    msg.reply('Orda Dur Bakalım Murat Derken Bari Besmele Çek Mk Yarması seni!');
  }
});

client.on('message', msg => {
  if (msg.content === 'link') {
    msg.reply('Napcan Aşiretinimi Çağırcan Çağır Gelsin Mk he Diyorsan Arkadaşımı Çağırcam Başım Üzerine!');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);
