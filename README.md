#110Percent's Discord Image Dumper - Version 0.1

Hello, and thank you for using my program! I know it's not the best thing around, but it means a lot to me if you use it! :)

Here's how you use this:
	>install Node.JS (https://nodejs.org/en/)
	>modify the config file (I'll explain that below)
	>save the config file
	>put images in /img/ if needed
	>open a commandline
	>navigate to this folder
	>type "node dumper.js"


Okay, here's how the Config works:

	token
		THIS IS REQUIRED IF YOU USE 2-FACTOR AUTHENTICATION FOR YOUR ACCOUNT!
		In order to get your user token, go to Discord and press Ctrl+Shift+I (Cmd+Shift+I on Mac). Navigate to the console and type localStorage.token

	email
	password
		Do I really need to explain these?
		These are not saved anywyere except this file. I cannot access this information in any way, nor can anyone else who uses this bot.

	folder
		This tells the program which folder to dump images from. If you want to use a backslash, type two of them, like this: \\
		If you don't want to mess around with the folder, just keep this setting as-is, and put your images in the "img" folder in the dumper's directory.
		If you want to use a directory inside the dumper's folder, put a ./ before the path like the one already entered.

	rate
		This setting affects how quickly the images will be posted, in milliseconds. I wouldn't go below 2000 due to Discord's ratelimiting system.

	channelid
		This tells the dumper which channel to upload the images to. In order to fetch a channel's ID, enable Discord's developer mode under its Appearance settings.
		Afterwards, right click a channel's name and click "Copy ID"

	filetypes
		Let's say you want to upload everything in a folder. Not just images. Or maybe just mp3 files.
		Simply add/remove file extensions to/from the array shown.
