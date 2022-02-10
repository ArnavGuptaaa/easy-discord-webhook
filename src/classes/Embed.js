import validateURL from '../../utils/validateURL.js';
import handleColor from '../../utils/decimalColor.js';

export default class Embed {
	constructor() {
		this.embed = [{}];
	}

	getEmbed() {
		return this.embed;
	}

	title(title) {
		if (!(title.length <= 256)) {
			throw new Error('Embed title length limit is 256 characters');
		}
		this.embed[0]['title'] = title.toString();

		return this;
	}

	description(description) {
		if (!(description.length <= 4096)) {
			throw new Error('Embed desctiption length limit is 4096 characters');
		}
		this.embed[0]['description'] = description.toString();

		return this;
	}

	url(url) {
		if (validateURL(url) === null) {
			throw new Error('Invalid embed URL');
		}

		this.embed[0]['url'] = url;

		return this;
	}

	color(color) {
		color = handleColor(color);
		this.embed[0]['color'] = color;

		return this;
	}

	author(name, url = null, iconUrl = null) {
		if (!(url && validateURL(url))) {
			throw new Error('Invalid author URL in embed');
		} else if (iconUrl && validateURL(iconUrl)) {
			throw new Error('Invalid author icon URL in embed');
		}
		this.embed[0]['author'] = { name, url, icon_url: iconUrl };

		return this;
	}

	footer(text, iconUrl = null) {
		if (!(iconUrl && validateURL(iconUrl))) {
			throw new Error('Invalid footer icon URL in embed');
		} else if (!(text.length <= 2048)) {
			throw new Error('Embed footer length limit is 2048 characters');
		}

		this.embed[0]['footer'] = { text, icon_url: iconUrl };

		return this;
	}

	timestamp(timestamp = new Date()) {
		this.embed[0]['timestamp'] = timestamp;
		return this;
	}

	image(imgUrl) {
		if (validateURL(imgUrl) === null) {
			throw new Error('Invalid image URL in embed');
		}

		this.embed[0]['image'] = { url: imgUrl };

		return this;
	}

	thumbnail(thumbnailUrl) {
		if (validateURL(thumbnailUrl) === null) {
			throw new Error('Invalid thumbnail URL in embed');
		}

		this.embed[0]['thumbnail'] = { url: thumbnailUrl };

		return this;
	}
}
