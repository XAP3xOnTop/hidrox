const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "cflip",
  description: "There is a big chance I insult you!",
  category: "fun",
  run: async (client, message, args) => {
    let responses = [
        "HEADS",
        "TAILS",
    ];
    let response =
        responses[Math.floor(Math.random() * responses.length - 0)];

        let Embed = new MessageEmbed()
            .setTitle(`Coin Flip!`)
            .setDescription(`**${response}**`)
            .setColor(`RANDOM`);
        message.channel.send(Embed);
  }}