const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "dice",
  category: "fun",
  run: async (client, message, args) => {

      let responses = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 0)];
      let Embed = new MessageEmbed()
        .setTitle(`Dice!`)
        .setDescription(`You rolled: **${response}**`)
        .setColor(`RANDOM`);
      message.channel.send(Embed);
  },
};