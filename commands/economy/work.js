const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "work",
    category: "economy",
    aliases: ["wr"],
    run: async (client, message, args) => {  

    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        const embed = new MessageEmbed()
            .setColor("#FFFFFF")
            .setDescription(`<:hxcross:781802972974940171> You have already worked recently\n\nTry again in ${time.minutes}m ${time.seconds}s `);
        await message.channel.send(embed)
      } else {

        let replies = ['Programmer','Builder','YouTuber','Waiter','Busboy','Chief','Mechanic']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 80) + 1;
        const embed1 = new MessageEmbed()
            .setColor("#FFFFFF")
            .setDescription(`<:hxcheck:781802907937931274> You worked as a ${replies[result]} and earned ${amount} <:hxcoin:781803628913885194>`);
        await message.channel.send(embed1)
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    };
}}