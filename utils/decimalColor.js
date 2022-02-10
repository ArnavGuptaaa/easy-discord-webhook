const handleColor = (color) => {
	if (color.startsWith('#')) {
		color = color.split('#')[1];
		if (color.length === 3) {
			color = color.concat(color);
		}

		color = parseInt(color, 16);
	}

	return color;
};

export default handleColor;
