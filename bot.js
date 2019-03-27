const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('**Selam Hoşgeldin.**                                                          `>`<http://instagram.com/muratsigmaz>` takip etmeyi unutma! ♥ Eggysden Hızlıyım mk');
  }
});

client.on('message', msg => {
  if (msg.content === 'Sa') {
    msg.reply('**Selam Hoşgeldin.**                                                          `>`<http://instagram.com/muratsigmaz>` takip etmeyi unutma! ♥ Eggysden Hızlıyım mk');
  }
});

client.on('message', msg => {
  if (msg.content === 'Selam') {
    msg.reply('**Selam Hoşgeldin.**                                                          `>`<http://instagram.com/muratsigmaz>` takip etmeyi unutma! ♥ Eggysden Hızlıyım mk');
  }
});

clclient.on('message', msg => {
  if (msg.content === 'Selamlar') {
    msg.reply('**Selam Hoşgeldin.**                                                          `>`<http://instagram.com/muratsigmaz>` takip etmeyi unutma! ♥ Eggysden Hızlıyım mk');
  }
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('**Selam Hoşgeldin.**                                                          `>`<http://instagram.com/muratsigmaz>` takip etmeyi unutma! ♥ Eggysden Hızlıyım mk');
  }
});

client.on('message', msg => {
  if (msg.content === 'sunucu') {
    msg.reply('sen sunucuyu kafana takma biz büyüyoruz bak dalgana genç!');
  }
});

client.on('message', msg => {
  if (msg.content === 'murat') {
    msg.reply('yavaş ol murat derken bile besmele çekmiyorsun sakin bölgeye geç!');
  }
});

client.on('message', msg => {
  if (msg.content === 'link') {
    msg.reply('hayır anlamıyorum napcan linki arkadaşını çağırcaksan tamam ama baskın filan sker atarım!');
  }
});

client.on('message', msg => {
  if (msg.content === 'naber') {
    msg.reply('gelmedi senden bi haber merak ettim öldünmü diye sorcam banane mk!');
  }
});

client.on('message', msg => {
  if (msg.content === '!ban özel') {
    msg.reply('AL AĞZINA https://media.giphy.com/media/uC9e2ojJn1ZXW/giphy.gif');
  }
});

client.login(process.env.BOT_TOKEN);
