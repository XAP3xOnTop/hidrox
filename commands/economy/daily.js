const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "daily",
    category: "economy",
    run: async (client, message, args) => {

    let user = message.author;

  let timeout = 86400000;
  let amount = 200;

  let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    const embed5 = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:hxcross:781802972974940171> You've already collected your daily reward\n\nCollect it again in ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(embed5)
  } else {
    const embed = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:hxcheck:781802907937931274> You've collected your daily reward of ${amount} <:hxcoin:781803628913885194>`);
    message.channel.send(embed)
    db.add(`money_${message.guild.id}_${user.id}`, amount)
    db.set(`daily_${message.guild.id}_${user.id}`, Date.now())


  }
}};
