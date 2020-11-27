const ms = require('ms');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "gend",
    category: "giveaway",
    description: "Get the oldest account creation date in the guild!",
    run: async (client, message, args) => {
        if (!args[0]) {
            const embed = new MessageEmbed()
                .setTitle('<:hxcross:781802972974940171> Type giveaway ID!')
                .setDescription('hx!gend <ID>')
                .setColor('#a81600');
            return message.channel.send(embed)
        };
        let messageID = args[0];
        client.giveawaysManager.end(messageID, {
        })
    }
}