const Discord = require("discord.js");
const db = require("quick.db");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "balance",
    category: "economy",
    aliases: ["bal"],
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

    if (bal === null) bal = 0;

    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
    if (bank === null) bank = 0;

    const embed = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`**${user}'s Balance**\n\nPocket: ${bal} <:hxcoin:781803628913885194>\nBank: ${bank} <:hxcoin:781803628913885194>`);
    await message.channel.send(embed)
}};