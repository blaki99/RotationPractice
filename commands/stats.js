const Discord = require("discord.js");

const MemberCount = blaki.channels.get('577178212141105154');

module.exports.run = async (blaki, member, args) => {
	setInterval(function() {
		console.log('Getting stats update..')
		var humansCount = member.guild.members.filter(member => !member.user.bot).size;
	  	humansCount.setName("🔥 Jest Nas: " + MemberCount);
	}, 30000)
};

module.exports.help = {
    name: "count"
}
