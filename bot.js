const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Bot aktif ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('AS');
  }
  if (msg.content.toLowerCase() === 'iyi geceler') {
    msg.reply('Tatlı Rüyalar');
  }
  if (msg.content.toLowerCase() === 'günaydın') {
    msg.reply('Tatlı Rüya Görmüşsündür Umarım :D');
  }
  if (msg.content.toLowerCase() === 'gideon') {
    msg.reply('Emredin Efendim');
  }
  if (msg.content.toLowerCase() === '!kurallar') {
    msg.channel.sendMessage('Ağır Küfür etmek yasak! - Irk, dil, din ayrımı yapmak yasak! - Reklam yapmak yasak! - +18 Içerik paylaşmak yasak! - Spam yapmak yasak!');
  }
  if (!msg.content.startsWith(prefix)){
    return;
  }
  if (msg.content.toLowerCase() === prefix + 'coder') {
    msg.reply('! BeraT"T [16]#5541')
  }
  if (msg.content.toLowerCase() === '!yardım') {
    msg.channel.sendMessage('!kurallar   ----   !coder');
  }

});
client.on('guildBanAdd' , (guild, user) => {
  let sunuculogları = guild.channels.find('name', 'banned');
  if (!sunuculogları) return;
  sunuculogları.send('**Banlandın Dostum!** ' + user.username + '**Kendine İyi Bak** :fist: :writing_hand:  :spy:' );
});

client.login('NjE2NzExMjEwMTE2NzEwNDAx.XW-X_w.KPhDUBjZG9748Kh4m390Hc59QsA');
