const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    console.log('📲 Scan the QR code to login.');
});

client.on('ready', () => {
    console.log('✅ Mr. Ari is now online!');
});

client.on('message', message => {
    if (message.body.toLowerCase() === 'menu') {
        message.reply('🍗 Welcome to Arizona Crunchy Chicken!\n👉 1. Tenders\n👉 2. Combo Meal\n👉 3. Dips\nSend the number to order.');
    }
});

client.initialize();
