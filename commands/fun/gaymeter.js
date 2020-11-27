const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "gay-meter",
    category: "fun",
    run: async (client, message, args) => {

        var response = [Math.floor(Math.random() * 100 - 0)];

        const embed = new MessageEmbed()
            .setTitle('Gay meter')
            .setDescription(`You are ${response}% gay`)
            .setColor('RANDOM');
        message.channel.send(embed)
    }
}