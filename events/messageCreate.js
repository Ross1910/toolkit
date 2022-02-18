import { Client } from 'discord.js';

export const name = 'messageCreate';

/**
 * @param {Client} client - The instantiated client object
 * @param {string} message - The message object
 * @returns {void}
 */
export const execute = (client, message) => {
	//ignore if the authour is the bot
	if (message.author.bot) return;
	//reply to the message
	if (message.channel == 'CHANNEL_ID') {
		//add reactons to the mesage
		message.react('👍');
		message.react('👎');
		//create a thread
		message.channel.threads.create({
			name: 'discussion',
		});
	}
};
