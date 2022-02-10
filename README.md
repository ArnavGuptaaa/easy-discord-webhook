# Easy Discord Webhooks
Send Nicely formatted messages and embeds using discord webhook API.

## Basic Hook Methods
```js
const hook = new DiscordWebHook('<WEBHOOK URL>');

hook
	.username('John Doe')
	.avatar('https://i.pravatar.cc/300')
	.message('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique nobis quasi harum? Maiores reiciendis sed rerum culpa.');

hook.send();
```

## Send Embeds
```js
const hook = new DiscordWebHook('<WEBHOOK URL>');
const embed = new Embed();

embed
	.author('Nav', 'https://github.com/ArnavGuptaaa', 'https://i.pravatar.cc/300')
	.title('This is a cool embed')
	.description('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi voluptatem repudiandae animi nisi.')
	.url('https://github.com/ArnavGuptaaa')
	.color('#ededed')
	.image('https://i.pravatar.cc/300')
	.thumbnail('https://i.pravatar.cc/300')
	.footer('Nice Footer', 'https://i.pravatar.cc/300') 
	.timestamp();

hook.embed(embed.getEmbed()).send();
```

## Quick Embeds
```js
const hook = new DiscordWebHook('<WEBHOOK URL>');

hook.sendSuccess('This is a success', '✅ Success');
hook.sendWarning('This is a warning', '⚠️ Warning');
hook.sendError('This is an error', '🛑 Error');
hook.sendInfo('This is an info', '💡 Info');
```

## TODO
- Add File support
- Add Fields in Embed
- Multiple Embed support