const Discord = require("discord.js");

module.exports.run = async (blaki, member, args) => {
	const MemberCount = member.guild.channels.get('577178212141105154');
	setInterval(function() {
		console.log('Getting stats update..')
		var humansCount = member.guild.members.filter(member => !member.user.bot).size;
	  	humansCount.setName("🔥 Jest Nas: " + MemberCount);
	}, 30000)
};

module.exports.help = {
    name: "count"
}
