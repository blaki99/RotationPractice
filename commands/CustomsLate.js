const Discord = require("discord.js");

module.exports.run = async (blaki, message, args) => {

    let Szefuncio = message.guild.roles.find("name", "OWNER 👑");

    let pass = (args[0]);
    let mode = args.join(" ").slice(7);
    const zasady1 = "**»** WIĘCEJ NIŻ 50 WALCZYMY OD POJAWIENIA SIĘ 3 STREFY !"
    const zasady2 = "**»** MNIEJ NIŻ 50 WALCZYMY OD POJAWIENIA SIĘ 4 STREFY !"
    const zasady3 = "**»** NIE BIJEMY LUDZI NA MIEJSCÓWKACH !"
    const zasady4 = "**»** NIE STRZELAMY W POJAZDY PRZED POJAWIENIEM SIĘ 3 LUB 4 STREFY !"
    const ping = "<@&577205221994922046>"
    const check = '577203620144087040'

    if(!message.member.roles.has(Szefuncio.id)) return message.reply("oops");
    if(!args[0]) return message.channel.send("❌ _Wprowadź prawidłowe wartości, **!late hasło tryb**_ ❌").then(() =>
    {
        message.channel.send("❌ _**Hasło musi posiadać dokładnie 7 znaków!**_ ❌");
    })
    message.delete();
    let customEmbed = new Discord.RichEmbed()
    .setColor("#008ae6")
    .setTitle("__**POWIADOMIENIE O NOWEJ GRZE**__")
    .addField("Hasło:", `**${pass}**`)
    .addField("Tryb Gry:", `**${mode}**`)
    .addField("Zasady:", zasady1 + `\n`+ zasady2 + `\n`+ zasady3 + `\n`+ zasady4)
    .setTimestamp(message.createdAt)
    .setFooter("Kliknij reakcje jeśli grasz", "https://i.imgur.com/HViVOMF.png");
    message.channel.send(ping);
    message.channel.send(customEmbed).then(function (message) {
        message.react(check)
    })
}

module.exports.help = {
    name: "late"
}
