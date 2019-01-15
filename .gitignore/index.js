// require packages
const Discord = require('discord.js');
const settings = require('./settings.json');

// initialise are bot
const bot = new Discord.Client();

// import bot setting (data)
const prefix = settings.prefix;
const token = settings.token;
const owner = settings.owner;


bot.on('ready', async () => {
    console.log("Hello,im ready");
})



bot.login(token);
