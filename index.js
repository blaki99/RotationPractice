const blakiconfig = require("./blakiconfig.json");
const Discord = require('discord.js');
const blaki = new Discord.Client({disableEveryone: true});
require('dotenv-flow').config();

const fs = require("fs");
blaki.commands = new Discord.Collection();

const config = {
    token: process.env.TOKEN
};

blaki.on('ready', async () => {
    console.log(`${blaki.user.username} jest online!`);
    blaki.user.setActivity('KOD BLAKI_ W SKLEPIE!', { type: 'STREAMING'});
    
    const guild = blaki.guilds.get('577167959047405588');
    setInterval(function() {
        	const HumansChannel = blaki.channels.get("577178212141105154");
	        const OnlineChannel = blaki.channels.get("577246837585477643");
		var HumansCount = guild.memberCount;
	        var OnlineCount = guild.members.filter(m => m.presence.status === 'online').size
	        HumansChannel.setName("🔥 Jest Nas: " + HumansCount);
	        OnlineChannel.setName("💚 Aktywni: " + OnlineCount);
	}, 30000)
});

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`Załadowano ${f}!`);
    blaki.commands.set(props.help.name, props);
  });

});

blaki.on("message", async message => {
    if(message.author.blaki) return;
    if(message.channel.type === "dm") return;
  
    let prefix = blakiconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = blaki.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(blaki,message,args);
  
});

blaki.login(config.token);
