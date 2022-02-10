import fetch from 'node-fetch';

import validateURL from '../../utils/validateURL.js';
import Embed from './Embed.js';

export default class DiscordWebHook {
	constructor(WebHookURL) {
		this.WebHookURL = WebHookURL;
		this.payload = {};
	}

	async send() {
		try {
			fetch(this.WebHookURL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(this.payload),
				redirect: 'follow',
			})
				.then(async (response) => {
					if (!response.ok) {
						throw new Error(JSON.parse(await response.text()).message);
					}
				})
				.catch((error) => {
					throw error;
				});
		} catch (error) {
			throw error;
		}
	}

	message(content) {
		if (!(content.length <= 2000)) {
			throw new Error('message length limit is 2000 characters');
		}
		this.payload['content'] = content;

		return this;
	}

	username(username) {
		if (!(username.length <= 80)) {
			throw new Error('Username length limit is 80 characters');
		}
		this.payload['username'] = username;

		return this;
	}

	avatar(avatarURL) {
		if (validateURL(avatarURL) === null) {
			throw new Error('Invalid avatar URL');
		}

		this.payload['avatar_url'] = avatarURL;

		return this;
	}

	embed(embed) {
		this.payload['embeds'] = embed;

		return this;
	}

	sendSuccess(message, title = 'Success') {
		const embed = new Embed();

		embed.title(title).description(message).timestamp().color('#28a745');

		this.embed(embed.getEmbed()).send();
	}

	sendWarning(message, title = 'Warning') {
		const embed = new Embed();

		embed.title(title).description(message).timestamp().color('#ffc107');

		this.embed(embed.getEmbed()).send();
	}

	sendError(message, title = 'Error') {
		const embed = new Embed();

		embed.title(title).description(message).timestamp().color('#dc3545');

		this.embed(embed.getEmbed()).send();
	}

	sendInfo(message, title = 'Info') {
		const embed = new Embed();

		embed.title(title).description(message).timestamp().color('#17a2b8');

		this.embed(embed.getEmbed()).send();
	}
}
