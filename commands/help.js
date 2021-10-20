module.exports = {
	name: 'help',
	aliases: ['?'],
	description: 'Answers RATBASE:tm: questions',
	execute(message){
		return message.channel.send(
			"**WELCOME TO RATBASE:tm:!**\n\n" + 
			"To create an account with RATBASE:tm: and start collecting **$RAT**, " +
			"use the command: **$$start**.\n" +
			"To view your current **$RAT** balance, use the command **$$balance**.\n" + 
			"To trade **$RAT** with another user, use the command **$$trade**.\n\n" + 
			//"To purchase **$RAT** when available, use the command **$$buy**.\n\n" +
			"To gamble **$RAT** on a coin flip, use the command **$$flip**.\n\n" +
			"Thank you for using **RATBASE:tm:**."
		);
	}
};