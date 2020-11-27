const ms = require('ms');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "greroll",
    description: "Rerolls giveaway",

    run: async (client, message, args) => {

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have permission to rerol giveaways');

        if (!args[0]) {
            const embed = new MessageEmbed()
                .setTitle('<:hxcross:781802972974940171> Type giveaway ID!')
                .setDescription('hx!reroll <ID>')
                .setColor('#a81600');
            return message.channel.send(embed)
        };

        let giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(" ")) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

        if(!giveaway) return message.channel.send('Couldn\'t find a giveaway with that ID/name');

        client.giveawaysManager.reroll(giveaway.messageID)
        .then(() => {
            message.channel.send('Giveaway rerolled')
        })
        .catch((e) => {
            if(e.startsWith(`Giveaway with ID ${giveaway.messageID} is not ended`)){
                const embed = new MessageEmbed()
                    .setTitle('<:hxcross:781802972974940171> This giveaway hasn\'t ended!')
                    .setDescription('hx!reroll <ID>')
                    .setColor('#a81600');
                return message.channel.send(embed)
            } else {
                console.error(e);
                const embed2 = new MessageEmbed()
                    .setTitle('<:hxcross:781802972974940171> ERROR!')
                    .setColor('#a81600');
                return message.channel.send(embed2)
            }
        })
    }
}
