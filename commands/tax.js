const profileModel = require('../models/profileSchema.js');

module.exports = {
	name: 'tax',
	description: 'Takes 5 $RAT from the richest hodler.',
	aliases: [],
	cooldown: 3600,
	execute(message, args, profileData){
		const tax = 5;
	
		if(!profileData)
			return message.channel.send("You do not have an account with RATBASE:tm:.");
	
		profileModel.find({}).sort({ rat: -1 }).exec((err, docs) => {
			if(docs[0].userID === profileData.userID) {
				return message.channel.send("You are the richest **$RAT** hodler. You cannot tax yourself.");
			}
			
			docs[0].rat -= tax;
			profileData.rat += tax;
			
			docs[0].save();
			profileData.save();
			
			return message.channel.send(
				"You have taxed **" + tax + " $RAT** from **" +
				docs[0].user + "**.\n" +
				docs[0].user + " now has a balance of **" + docs[0].rat + " $RAT**.\n" +
				profileData.user + " now has a balance of **" + profileData.rat + " $RAT**."
			);
		});
	}
};