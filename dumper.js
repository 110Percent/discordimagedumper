console.log("110Percent's Discord Image Dumper - Version 0.1");
console.log("Loading Discord.JS...")
var Discord = require("discord.js");
var bot = new Discord.Client({autoreconnect:true,bot:false});
console.log("Loaded Discord.JS!");
console.log("Reading config...");
var config = require("./config.json");
console.log("Config loaded!");
var fs = require("fs");
if (config.token == null){
	console.log("No token detected; Logging in with Email and Password...");
	bot.login(config.email,config.password);
}
else {
	console.log("Token detected! Using extra security? Nice. :)");
	bot.loginWithToken(config.token);
}
bot.on("ready",function(){
	console.log("Successfully logged in as " + bot.user.name + "#" + bot.user.discriminator + "!");
	console.log("Loading files from " + config.folder + "...");
	var allfiles = fs.readdirSync(config.folder);
	console.log("Filtering by filetype...");
	var path = require("path");
	console.log(allfiles.join("\n"))
	for (var i = 0; i < allfiles.length; i ++) {
		var scan = allfiles[i];
		if (config.filetypes.indexOf(path.extname(scan)) == -1){
			console.log("Removing " + scan + "...");
			allfiles.splice(allfiles.indexOf(scan),1);
			i--
		}
	}
	console.log("Files to upload:\n" + allfiles.join("\n"));
	var targetchannel = bot.channels.get("id",config.channelid);
	console.log("Targeted channel " + targetchannel.name + " in server " + targetchannel.server.name + "!");
	console.log("Uploading images... now!");
	var counter = 0;
	function upload(){
		setTimeout(function (){
			bot.sendFile(targetchannel, config.folder + "/" + allfiles[counter]);
			console.log("Uploaded " + allfiles[counter] + "!");
			counter++
			if (counter < allfiles.length){
				upload();
			}
		}, config.rate);
	}
	upload();
})