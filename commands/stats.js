const Discord = require("discord.js");

module.exports.run = async (blaki, member, args) => {;
	let humans = member.guild.members.filter(member => !member.user.blaki).size;
	member.guild.channels.get('577178212141105154').setName(`🔥 Jest Nas: ${humans}`)
};

module.exports.help = {
    name: "count"
}
