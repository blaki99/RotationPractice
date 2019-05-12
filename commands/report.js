const Discord = require("discord.js");

module.exports.run = async (blaki, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("❌ Nie podano użytkownika, wpisz !report @user powód aby zgłosić użytkownika ❌");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setAuthor("KOD » BLAKI_", "https://i.imgur.com/HViVOMF.png")
    .setColor("#ff0000")
    .addField("Zgłoszony Gracz", `${rUser} jego ID: ${rUser.id}`)
    .addField("Zgłoszony przez", `${message.author} jego ID: ${message.author.id}`)
    .addField("Kanał", message.channel)
    .addField("Powód", rreason)
    .setTimestamp(message.createdAt)
    .setFooter('Nowe Zgłoszenie', 'https://i.imgur.com/HViVOMF.png');

    let reportschannel = message.guild.channels.find(`name`, "zgłoszenia");
    if(!reportschannel) return message.channel.send("Nie znaleziono kanału do zgłoszeń.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}
