// server.js

// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();
const port = 3000;

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


const TOKEN = '7484224847:AAHve7fZkRutXKixSnY0gTzlm6SoC8klZN0'
const { Telegraf } = require("telegraf")
const bot = new Telegraf(TOKEN)
const web_link = "https://fanciful-treacle-b8d943.netlify.app/"

bot.start((ctx) => ctx.reply('Welcome', {reply_markup: {keyboard: [[{text: "Weather", 
    web_app: {url:web_link}}]]}}))
bot.launch()


// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
