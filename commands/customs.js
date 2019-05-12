const Discord = require("discord.js");

module.exports.run = async (blaki, message, args) => {

    let Szefuncio = message.guild.roles.find("name", "SZEFUNCIO 🎓");

    let pass = (args[0]);
    let mode = args.join(" ").slice(7);
    const ping = "<@&535100081444225035>"
    const check = '577121399043522560'

    if(!message.member.roles.has(Szefuncio.id)) return message.reply("oops");
    if(!args[0]) return message.channel.send("❌ _Wprowadź prawidłowe wartości, **b!ct hasło tryb**_ ❌").then(() =>
    {
        message.channel.send("❌ _**Hasło musi posiadać dokładnie 7 znaków!**_ ❌");
    })
    message.delete();
    let customEmbed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setTitle("__**POWIADOMIENIE O NOWEJ GRZE**__")
    .addField("Hasło:", `**${pass}**`)
    .addField("Tryb Gry:", `**${mode}**`)
    .setTimestamp(message.createdAt)
    .setFooter("Kliknij reakcje jeśli grasz", "https://i.imgur.com/KyTy1HB.png");
    message.channel.send(ping);
    message.channel.send(customEmbed).then(function (message) {
        message.react(check)
    })
}

module.exports.help = {
    name: "ct"
}
