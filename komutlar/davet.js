const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const embedyardim = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(`${client.user.username} `, client.user.avatarURL({dynamic:true})) 
      .setDescription('> HypeLogger - Davet')
      .addField('** Davet **', `Davet Linkim: ` +  '[TIKLA](https://discord.com/api/oauth2/authorize?client_id=806416950959013908&permissions=8&scope=bot)')
      
   .setFooter(`© ${client.user.username} ` , client.user.avatarURL({dynamic:true}))
    .setTimestamp()
    message.channel.send(embedyardim).catch()
    
//////Elminstêr#0007
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'davet',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};