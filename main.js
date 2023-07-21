const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    puppeteer: {
        executablePath: '/usr/bin/google-chrome-stable',
    },
    authStrategy: new LocalAuth()
})

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
		// message.reply('pong');
        console.log(message.from)
});

client.initialize();